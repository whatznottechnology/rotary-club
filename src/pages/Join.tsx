import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Users, Heart, Globe, CheckCircle } from "lucide-react";

const Join = () => {
  const { toast } = useToast();
  const [formType, setFormType] = useState<"member" | "volunteer" | "donate">("member");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    organization: "",
    interests: [] as string[],
    message: "",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We will contact you soon.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      occupation: "",
      organization: "",
      interests: [],
      message: "",
      amount: "",
    });
  };

  const benefits = [
    {
      icon: Users,
      title: "Network & Fellowship",
      description: "Connect with like-minded professionals and leaders"
    },
    {
      icon: Heart,
      title: "Make a Difference",
      description: "Create lasting impact through meaningful service projects"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Join 1.2 million Rotarians worldwide making change"
    },
    {
      icon: CheckCircle,
      title: "Personal Growth",
      description: "Develop leadership skills and professional excellence"
    }
  ];

  const interestOptions = [
    "Community Service",
    "Youth Programs",
    "Environmental Projects",
    "Healthcare Initiatives",
    "Education Support",
    "International Service",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-primary-foreground/90">
            Join us in making a positive impact in our community
          </p>
        </div>
      </section>

      {/* Form Type Selection */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={formType === "member" ? "default" : "outline"}
              onClick={() => setFormType("member")}
              size="lg"
            >
              Become a Member
            </Button>
            <Button
              variant={formType === "volunteer" ? "default" : "outline"}
              onClick={() => setFormType("volunteer")}
              size="lg"
            >
              Volunteer
            </Button>
            <Button
              variant={formType === "donate" ? "default" : "outline"}
              onClick={() => setFormType("donate")}
              size="lg"
            >
              Donate
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits Sidebar */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Why Join Rotary?</h2>
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-8 w-8 text-accent mb-3" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {formType === "member" && "Membership Application"}
                    {formType === "volunteer" && "Volunteer Registration"}
                    {formType === "donate" && "Make a Donation"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Common Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    {/* Membership/Volunteer Specific Fields */}
                    {(formType === "member" || formType === "volunteer") && (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="occupation">Occupation</Label>
                            <Input
                              id="occupation"
                              value={formData.occupation}
                              onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="organization">Organization</Label>
                            <Input
                              id="organization"
                              value={formData.organization}
                              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Areas of Interest</Label>
                          <div className="grid md:grid-cols-2 gap-3">
                            {interestOptions.map((interest) => (
                              <div key={interest} className="flex items-center space-x-2">
                                <Checkbox
                                  id={interest}
                                  checked={formData.interests.includes(interest)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      setFormData({
                                        ...formData,
                                        interests: [...formData.interests, interest]
                                      });
                                    } else {
                                      setFormData({
                                        ...formData,
                                        interests: formData.interests.filter((i) => i !== interest)
                                      });
                                    }
                                  }}
                                />
                                <Label htmlFor={interest} className="font-normal cursor-pointer">
                                  {interest}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Donation Specific Fields */}
                    {formType === "donate" && (
                      <div className="space-y-2">
                        <Label htmlFor="amount">Donation Amount (INR) *</Label>
                        <Input
                          id="amount"
                          type="number"
                          value={formData.amount}
                          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                          required
                          placeholder="Enter amount"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {formType === "donate" ? "Message (Optional)" : "Why do you want to join? *"}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required={formType !== "donate"}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {formType === "member" && "Submit Application"}
                      {formType === "volunteer" && "Register as Volunteer"}
                      {formType === "donate" && "Proceed to Payment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
