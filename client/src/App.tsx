import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Background from "@/components/background";
import Home from "@/pages/home";
import Vision from "@/pages/vision";
import Pillars from "@/pages/pillars";
import Budget from "@/pages/budget";
import Donate from "@/pages/donate";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Background />
      <Navigation />
      <main className="pt-28 pb-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/vision" component={Vision} />
          <Route path="/pillars" component={Pillars} />
          <Route path="/budget" component={Budget} />
          <Route path="/donate" component={Donate} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
