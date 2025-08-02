import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Key, Copy, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { campaignData, donationPurposes } from "@/lib/campaign-data";
import { generateReferenceCode, copyToClipboard, validatePhoneNumber } from "@/lib/donation-utils";
import { useToast } from "@/hooks/use-toast";

const donationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  donationPurpose: z.string().min(1, "Please select a donation purpose"),
  paymentMethod: z.enum(["mobile_money", "bank_transfer"]),
  mobileProvider: z.enum(["airtel", "mtn"]).optional(),
  phoneNumber: z.string().optional(),
  bankChoice: z.enum(["stanbic", "pride"]).optional()
}).refine((data) => {
  if (data.paymentMethod === "mobile_money") {
    return data.mobileProvider && data.phoneNumber && validatePhoneNumber(data.phoneNumber);
  }
  if (data.paymentMethod === "bank_transfer") {
    return data.bankChoice;
  }
  return true;
}, {
  message: "Please complete all required fields for your selected payment method"
});

type DonationForm = z.infer<typeof donationSchema>;

interface PaymentInstructions {
  type: "mobile" | "bank";
  fullName: string;
  referenceCode?: string;
  provider?: string;
  phoneNumber?: string;
  bank?: string;
}

export default function Donate() {
  const [paymentModal, setPaymentModal] = useState(false);
  const [paymentInstructions, setPaymentInstructions] = useState<PaymentInstructions | null>(null);
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const form = useForm<DonationForm>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      fullName: "",
      donationPurpose: "",
      paymentMethod: "mobile_money"
    }
  });

  const paymentMethod = form.watch("paymentMethod");

  const handleCopy = async (text: string, type: string) => {
    try {
      await copyToClipboard(text);
      setCopiedItems(prev => new Set([...prev, type]));
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      });
      
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev);
          newSet.delete(type);
          return newSet;
        });
      }, 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please copy manually",
        variant: "destructive"
      });
    }
  };

  const onSubmit = (data: DonationForm) => {
    if (data.paymentMethod === "mobile_money" && data.mobileProvider && data.phoneNumber) {
      const referenceCode = generateReferenceCode(data.phoneNumber);
      setPaymentInstructions({
        type: "mobile",
        fullName: data.fullName,
        referenceCode,
        provider: data.mobileProvider,
        phoneNumber: data.phoneNumber
      });
    } else if (data.paymentMethod === "bank_transfer" && data.bankChoice) {
      setPaymentInstructions({
        type: "bank",
        fullName: data.fullName,
        bank: data.bankChoice
      });
    }
    setPaymentModal(true);
  };

  const renderMobileInstructions = () => {
    if (!paymentInstructions || paymentInstructions.type !== "mobile") return null;

    const providerInfo = campaignData.paymentMethods.mobileMoney[
      paymentInstructions.provider as keyof typeof campaignData.paymentMethods.mobileMoney
    ];

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h4 className={`text-xl font-semibold ${providerInfo.color} mb-2`}>
            {providerInfo.name} Payment
          </h4>
          <p className="text-gray-600">Thank you, {paymentInstructions.fullName}!</p>
        </div>
        
        <div className="bg-white/50 rounded-xl p-4">
          <h5 className="font-semibold text-gray-800 mb-2">Your Reference Code:</h5>
          <div className="flex items-center justify-between bg-gray-100 rounded-lg p-3">
            <span className="font-bold text-lg text-primary">
              {paymentInstructions.referenceCode}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleCopy(paymentInstructions.referenceCode!, "Reference Code")}
              className="text-primary hover:text-secondary"
            >
              {copiedItems.has("Reference Code") ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Use this as the reason for payment to help us identify your donation.
          </p>
        </div>
        
        <div className="bg-white/50 rounded-xl p-4">
          <h5 className="font-semibold text-gray-800 mb-3">Payment Instructions:</h5>
          
          <div className="space-y-3">
            <div className="border-l-4 border-primary pl-4">
              <h6 className="font-semibold text-gray-800">Option 1: USSD Code</h6>
              <a
                href={`tel:${providerInfo.dialCode}`}
                className="inline-block bg-primary text-white px-4 py-2 rounded-lg mt-2 hover:bg-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Dial {providerInfo.dialCode}
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Next step will ask for amount - enter any amount of your choice.<br />
                Ensure recipient name shows "Ainebyona Nicholas" before confirming.
              </p>
            </div>
            
            <div className="border-l-4 border-secondary pl-4">
              <h6 className="font-semibold text-gray-800">Option 2: Mobile App</h6>
              <p className="text-sm text-gray-600 mt-1">{providerInfo.appInstructions}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <h6 className="font-semibold text-yellow-800 mb-2">
            ⚠️ Important Notes:
          </h6>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Recipient: Ainebyona Nicholas</li>
            <li>• Number: {providerInfo.number}</li>
            <li>• Reason: {paymentInstructions.referenceCode}</li>
            <li>• Amount: Your choice</li>
          </ul>
        </div>
      </div>
    );
  };

  const renderBankInstructions = () => {
    if (!paymentInstructions || paymentInstructions.type !== "bank") return null;

    const bankInfo = campaignData.paymentMethods.banks[
      paymentInstructions.bank as keyof typeof campaignData.paymentMethods.banks
    ];

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h4 className={`text-xl font-semibold ${bankInfo.color} mb-2`}>
            {bankInfo.name} Transfer
          </h4>
          <p className="text-gray-600">Thank you, {paymentInstructions.fullName}!</p>
        </div>
        
        <div className="bg-white/50 rounded-xl p-4">
          <h5 className="font-semibold text-gray-800 mb-3">Bank Details:</h5>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Bank:</span>
              <span className="font-semibold">{bankInfo.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Account Number:</span>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{bankInfo.account}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(bankInfo.account, "Account Number")}
                  className="text-primary hover:text-secondary"
                >
                  {copiedItems.has("Account Number") ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Account Name:</span>
              <span className="font-semibold">Ainebyona Nicholas</span>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h6 className="font-semibold text-blue-800 mb-2">
            ℹ️ Transfer Instructions:
          </h6>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Use your full name ({paymentInstructions.fullName}) as reference</li>
            <li>• Transfer any amount of your choice</li>
            <li>• Ensure account name matches "Ainebyona Nicholas"</li>
            <li>• Keep your transaction receipt for records</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="fade-in">
      <section className="min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-6">Support Our Campaign</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the movement to light up the youth nation. Every contribution makes a difference in empowering the next generation of leaders.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-gray-700 font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  {...form.register("fullName")}
                  placeholder="Enter your full name"
                  className="glass border-gray-200 focus:border-primary"
                />
                {form.formState.errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Donation Purpose */}
              <div>
                <Label className="text-gray-700 font-semibold">
                  What are you donating for? *
                </Label>
                <Select
                  value={form.watch("donationPurpose")}
                  onValueChange={(value) => form.setValue("donationPurpose", value)}
                >
                  <SelectTrigger className="glass border-gray-200 focus:border-primary">
                    <SelectValue placeholder="Select donation purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    {donationPurposes.map((purpose) => (
                      <SelectItem key={purpose.value} value={purpose.value}>
                        {purpose.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.donationPurpose && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.donationPurpose.message}
                  </p>
                )}
              </div>

              {/* Payment Method */}
              <div>
                <Label className="text-gray-700 font-semibold">Payment Method *</Label>
                <RadioGroup
                  value={form.watch("paymentMethod")}
                  onValueChange={(value) => form.setValue("paymentMethod", value as "mobile_money" | "bank_transfer")}
                  className="grid md:grid-cols-2 gap-4 mt-2"
                >
                  <Label className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-primary cursor-pointer transition-colors glass hover-glass">
                    <RadioGroupItem value="mobile_money" />
                    <div>
                      <p className="font-semibold text-gray-800">Mobile Money</p>
                      <p className="text-sm text-gray-600">Airtel Money & MTN MoMo Pay</p>
                    </div>
                  </Label>
                  <Label className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-primary cursor-pointer transition-colors glass hover-glass">
                    <RadioGroupItem value="bank_transfer" />
                    <div>
                      <p className="font-semibold text-gray-800">Bank Transfer</p>
                      <p className="text-sm text-gray-600">Stanbic Bank & Pride Bank</p>
                    </div>
                  </Label>
                </RadioGroup>
              </div>

              {/* Mobile Money Section */}
              {paymentMethod === "mobile_money" && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-gray-700 font-semibold">
                      Choose Mobile Money Provider *
                    </Label>
                    <RadioGroup
                      value={form.watch("mobileProvider")}
                      onValueChange={(value) => form.setValue("mobileProvider", value as "airtel" | "mtn")}
                      className="grid md:grid-cols-2 gap-4 mt-2"
                    >
                      <Label className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-red-500 cursor-pointer transition-colors glass hover-glass">
                        <RadioGroupItem value="airtel" />
                        <div>
                          <p className="font-semibold text-gray-800">Airtel Money</p>
                          <p className="text-sm text-gray-600">0759070886</p>
                        </div>
                      </Label>
                      <Label className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-yellow-500 cursor-pointer transition-colors glass hover-glass">
                        <RadioGroupItem value="mtn" />
                        <div>
                          <p className="font-semibold text-gray-800">MTN MoMo Pay</p>
                          <p className="text-sm text-gray-600">0773695668</p>
                        </div>
                      </Label>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="phoneNumber" className="text-gray-700 font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phoneNumber"
                      {...form.register("phoneNumber")}
                      placeholder="0701234567"
                      className="glass border-gray-200 focus:border-primary"
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      Enter your phone number starting with 0
                    </p>
                  </div>
                </div>
              )}

              {/* Bank Transfer Section */}
              {paymentMethod === "bank_transfer" && (
                <div>
                  <Label className="text-gray-700 font-semibold">Choose Bank *</Label>
                  <RadioGroup
                    value={form.watch("bankChoice")}
                    onValueChange={(value) => form.setValue("bankChoice", value as "stanbic" | "pride")}
                    className="grid md:grid-cols-2 gap-4 mt-2"
                  >
                    <Label className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 cursor-pointer transition-colors glass hover-glass">
                      <RadioGroupItem value="stanbic" />
                      <div>
                        <p className="font-semibold text-gray-800">Stanbic Bank</p>
                        <p className="text-sm text-gray-600">9030021639280</p>
                      </div>
                    </Label>
                    <Label className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-green-500 cursor-pointer transition-colors glass hover-glass">
                      <RadioGroupItem value="pride" />
                      <div>
                        <p className="font-semibold text-gray-800">Pride Bank</p>
                        <p className="text-sm text-gray-600">4904803012993057</p>
                      </div>
                    </Label>
                  </RadioGroup>
                </div>
              )}

              {/* Generate Reference Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Key className="w-5 h-5 mr-2" />
                Generate Reference Code
              </Button>
            </form>
          </div>

          {/* Payment Instructions Modal */}
          <Dialog open={paymentModal} onOpenChange={setPaymentModal}>
            <DialogContent className="glass max-w-lg max-h-96 overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800">
                  Payment Instructions
                </DialogTitle>
              </DialogHeader>
              {paymentInstructions?.type === "mobile" ? renderMobileInstructions() : renderBankInstructions()}
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
}
