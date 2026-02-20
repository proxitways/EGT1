import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  DollarSign,
  FileText,
  Globe,
  Shield
} from 'lucide-react';
import { countries, mockInquiries } from '../mockData';
import { toast } from 'sonner';

const CountryDetail = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const country = countries.find(c => c.id === countryId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    package: 'standard',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Country not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with API call
    setTimeout(() => {
      const inquiry = {
        id: Date.now().toString(),
        ...formData,
        country: country.name,
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      
      mockInquiries.push(inquiry);
      
      toast.success('Inquiry submitted successfully!', {
        description: 'Our team will contact you within 24 hours.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        package: 'standard',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <Globe className="w-8 h-8 text-emerald-600" />
                <span className="text-2xl font-bold text-gray-900">GlobalForm</span>
              </div>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-7xl">{country.flag}</span>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900">{country.name}</h1>
                  <p className="text-xl text-gray-600 mt-2">{country.description}</p>
                </div>
              </div>
            </div>
            <Badge className="bg-emerald-600 text-white text-lg px-6 py-2">
              <Clock className="w-5 h-5 mr-2" />
              {country.timeline}
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Key Features & Benefits</CardTitle>
                <CardDescription>Why choose {country.name} for your business?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {country.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-emerald-600" />
                  Formation Requirements
                </CardTitle>
                <CardDescription>Documents and information needed</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {country.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-emerald-700">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Additional Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-emerald-600" />
                  Business Benefits
                </CardTitle>
                <CardDescription>Advantages of incorporating in {country.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {country.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="font-medium text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-emerald-600" />
                  Pricing Packages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-gray-900">Basic</span>
                    <span className="text-2xl font-bold text-gray-900">${country.pricing.basic}</span>
                  </div>
                  <p className="text-sm text-gray-600">Essential formation package</p>
                </div>
                
                <div className="p-4 border-2 border-emerald-500 bg-emerald-50 rounded-lg relative">
                  <Badge className="absolute -top-3 right-4 bg-emerald-600">Popular</Badge>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-gray-900">Standard</span>
                    <span className="text-2xl font-bold text-emerald-600">${country.pricing.standard}</span>
                  </div>
                  <p className="text-sm text-gray-600">Complete package with support</p>
                </div>
                
                <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-gray-900">Premium</span>
                    <span className="text-2xl font-bold text-gray-900">${country.pricing.premium}</span>
                  </div>
                  <p className="text-sm text-gray-600">Full-service with compliance</p>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mt-4">
                  Compare Packages
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Inquiry Form */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-3xl">Get Started Today</CardTitle>
            <CardDescription className="text-base">
              Fill out the form below and our experts will contact you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companyName">Proposed Company Name</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your Company Ltd"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="package">Select Package *</Label>
                <Select 
                  value={formData.package} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, package: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic - ${country.pricing.basic}</SelectItem>
                    <SelectItem value="standard">Standard - ${country.pricing.standard}</SelectItem>
                    <SelectItem value="premium">Premium - ${country.pricing.premium}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business plans..."
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-12">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Globe className="w-6 h-6 text-emerald-500" />
            <span className="text-xl font-bold text-white">GlobalForm</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Professional company formation services worldwide
          </p>
          <p className="text-xs text-gray-500">
            &copy; 2024 GlobalForm. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CountryDetail;
