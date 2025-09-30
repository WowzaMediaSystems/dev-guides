import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function ComingSoonPage() {


  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Coming Soon!
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay tuned for updates!
          </p>
        </div>

       

  
      </div>

      <Footer />
    </div>
  );
}
