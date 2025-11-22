import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen, Droplet, Building2, MapPin, CreditCard, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: `${field} copied to clipboard`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const causes = [
    {
      icon: Heart,
      title: "General Fund",
      description: "Support all our community service initiatives"
    },
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Help provide educational opportunities to underprivileged students"
    },
    {
      icon: Droplet,
      title: "Clean Water Project",
      description: "Contribute to providing clean drinking water access"
    },
    {
      icon: Users,
      title: "Youth Programs",
      description: "Support youth development and leadership initiatives"
    },
  ];

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

            {/* Bank Account Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-md border-accent/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">Bank Transfer Details</h2>
                  <p className="text-muted-foreground mb-6">
                    Transfer your donation directly to our bank account. Click the copy icon to easily copy details.
                  </p>

                  <div className="space-y-4">
                    {/* Account Name */}
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-2 border-blue-100 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground font-medium">Account Name</p>
                          <p className="text-lg font-semibold text-primary">Rotary Club of Calcutta New Horizons</p>
                        </div>
                      </div>
                    </div>

                    {/* Bank Name & Branch */}
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-2 border-blue-100 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground font-medium">Bank Name</p>
                          <p className="text-lg font-semibold text-primary">The Federal Bank Limited</p>
                          <p className="text-sm text-foreground mt-1">BBD Bag, Kolkata</p>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-2 border-blue-100 rounded-lg">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground font-medium">Branch Address</p>
                          <p className="text-foreground">"Olisa House", 4 Government Place North, Kolkata-700001</p>
                        </div>
                      </div>
                    </div>

                    {/* Account Number */}
                    <div className="p-4 bg-gradient-to-r from-accent/10 to-white border-2 border-accent/40 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CreditCard className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground font-medium">Account Number</p>
                          <div className="flex items-center justify-between gap-4 mt-1">
                            <p className="text-xl font-bold text-primary tracking-wider">21530 2000 10321</p>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="border-accent text-accent hover:bg-accent hover:text-white"
                              onClick={() => copyToClipboard("215302000103321", "Account Number")}
                            >
                              {copiedField === "Account Number" ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* IFSC Code */}
                    <div className="p-4 bg-gradient-to-r from-accent/10 to-white border-2 border-accent/40 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground font-medium">IFSC Code</p>
                          <div className="flex items-center justify-between gap-4 mt-1">
                            <p className="text-xl font-bold text-primary tracking-wider">FDRL0002153</p>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="border-accent text-accent hover:bg-accent hover:text-white"
                              onClick={() => copyToClipboard("FDRL0002153", "IFSC Code")}
                            >
                              {copiedField === "IFSC Code" ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SWIFT Code */}
                    <div className="p-4 bg-gradient-to-r from-accent/10 to-white border-2 border-accent/40 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground font-medium">SWIFT Code (For International Transfers)</p>
                          <div className="flex items-center justify-between gap-4 mt-1">
                            <p className="text-xl font-bold text-primary tracking-wider">FDRLINBBCAA</p>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="border-accent text-accent hover:bg-accent hover:text-white"
                              onClick={() => copyToClipboard("FDRLINBBCAA", "SWIFT Code")}
                            >
                              {copiedField === "SWIFT Code" ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      💚 After transferring, please email your transaction details to us for issuing a tax receipt.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Donate Section */}
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Why Your Donation Matters</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {causes.map((cause, index) => (
                      <div
                        key={index}
                        className="p-4 border-2 border-border rounded-lg hover:border-accent/50 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <cause.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-foreground">{cause.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{cause.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
