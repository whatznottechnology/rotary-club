import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, BookOpen, Droplet } from "lucide-react";

const Donate = () => {
  const { toast } = useToast();
  const [donationType, setDonationType] = useState("general");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = ["500", "1000", "2500", "5000"];

  const causes = [
    {
      icon: Heart,
      title: "General Fund",
      description: "Support all our community service initiatives",
      value: "general"
    },
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Help provide educational opportunities to underprivileged students",
      value: "education"
    },
    {
      icon: Droplet,
      title: "Clean Water Project",
      description: "Contribute to providing clean drinking water access",
      value: "water"
    },
    {
      icon: Users,
      title: "Youth Programs",
      description: "Support youth development and leadership initiatives",
      value: "youth"
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = amount === "custom" ? customAmount : amount;
    
    if (!finalAmount || parseFloat(finalAmount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank You!",
      description: `Your donation of ₹${finalAmount} has been processed. You will receive a confirmation email shortly.`,
    });

    // Reset form
    setAmount("");
    setCustomAmount("");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Donation</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Your generous contribution helps us continue our mission of service and make a lasting impact in our community
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Impact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Your Impact</h2>
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Where Your Donation Goes:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>85% directly to program services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>10% to administrative costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>5% to fundraising initiatives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-sm bg-secondary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Tax Benefits</h3>
                  <p className="text-sm text-muted-foreground">
                    All donations are tax-deductible under Section 80G of the Income Tax Act. You will receive a tax receipt for your contribution.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl">Choose Your Contribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Cause Selection */}
                    <div className="space-y-3">
                      <Label className="text-base">Select a Cause</Label>
                      <RadioGroup value={donationType} onValueChange={setDonationType}>
                        {causes.map((cause) => (
                          <div key={cause.value} className="flex items-start space-x-3 border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                            <RadioGroupItem value={cause.value} id={cause.value} />
                            <Label htmlFor={cause.value} className="flex-1 cursor-pointer">
                              <div className="flex items-start gap-3">
                                <cause.icon className="h-5 w-5 text-accent mt-0.5" />
                                <div>
                                  <div className="font-semibold">{cause.title}</div>
                                  <div className="text-sm text-muted-foreground">{cause.description}</div>
                                </div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Amount Selection */}
                    <div className="space-y-3">
                      <Label className="text-base">Donation Amount (INR)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {predefinedAmounts.map((amt) => (
                          <Button
                            key={amt}
                            type="button"
                            variant={amount === amt ? "default" : "outline"}
                            onClick={() => setAmount(amt)}
                            className="h-12"
                          >
                            ₹{amt}
                          </Button>
                        ))}
                      </div>
                      <Button
                        type="button"
                        variant={amount === "custom" ? "default" : "outline"}
                        onClick={() => setAmount("custom")}
                        className="w-full"
                      >
                        Custom Amount
                      </Button>

                      {amount === "custom" && (
                        <div className="space-y-2">
                          <Label htmlFor="customAmount">Enter Custom Amount</Label>
                          <Input
                            id="customAmount"
                            type="number"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            placeholder="Enter amount"
                            required
                          />
                        </div>
                      )}
                    </div>

                    {/* Donor Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address (for tax receipt)</Label>
                      <Input id="address" />
                    </div>

                    <Button type="submit" size="lg" className="w-full" variant="accent">
                      Donate{amount && amount !== "custom" ? ` ₹${amount}` : customAmount ? ` ₹${customAmount}` : ""}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Your donation is secure and will be processed safely
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Donor Recognition</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We deeply appreciate every contribution. Major donors are recognized on our website and in our annual report.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-2">Bronze Circle</h3>
                <p className="text-3xl font-bold text-accent mb-2">₹10,000+</p>
                <p className="text-sm text-muted-foreground">Annual Giving</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-2">Silver Circle</h3>
                <p className="text-3xl font-bold text-accent mb-2">₹25,000+</p>
                <p className="text-sm text-muted-foreground">Annual Giving</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-2">Gold Circle</h3>
                <p className="text-3xl font-bold text-accent mb-2">₹50,000+</p>
                <p className="text-sm text-muted-foreground">Annual Giving</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
