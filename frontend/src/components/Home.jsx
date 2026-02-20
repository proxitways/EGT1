import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  ArrowRight, 
  Globe, 
  Clock, 
  Shield, 
  TrendingUp, 
  CheckCircle2,
  Building2,
  Receipt,
  Landmark,
  ShieldCheck,
  Mail,
  FileText
} from 'lucide-react';
import { countries, faqs, services } from '../mockData';

const iconMap = {
  'building-2': Building2,
  'receipt': Receipt,
  'landmark': Landmark,
  'shield-check': ShieldCheck,
  'mail': Mail,
  'file-text': FileText
};

const Home = () => {
  const navigate = useNavigate();
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">GlobalForm</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#countries" className="text-gray-600 hover:text-emerald-600 transition-colors">Countries</a>
              <a href="#services" className="text-gray-600 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#faq" className="text-gray-600 hover:text-emerald-600 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              Trusted by 10,000+ businesses worldwide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Form Your Company
              <br />
              <span className="text-emerald-600">Anywhere in the World</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional company formation services across UK, USA, Saudi Arabia, Qatar, and India. 
              Fast, reliable, and hassle-free registration with expert support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8"
                onClick={() => document.getElementById('countries').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Countries
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'Companies Formed', value: '10,000+' },
              { label: 'Countries Covered', value: '5' },
              { label: 'Success Rate', value: '99.8%' },
              { label: 'Avg. Formation Time', value: '3 Days' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-emerald-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Jurisdiction</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect location for your business based on your needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Card 
                key={country.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-500"
                onMouseEnter={() => setHoveredCountry(country.id)}
                onMouseLeave={() => setHoveredCountry(null)}
                onClick={() => navigate(`/country/${country.id}`)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-5xl">{country.flag}</span>
                    <Badge className="bg-emerald-100 text-emerald-700">
                      {country.timeline}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-emerald-600 transition-colors">
                    {country.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {country.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                      Formation: {country.timeline}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-2 text-emerald-600" />
                      Starting from ${country.pricing.basic}
                    </div>
                    <Button 
                      className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 group-hover:bg-emerald-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/country/${country.id}`);
                      }}
                    >
                      Learn More
                      <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${hoveredCountry === country.id ? 'translate-x-1' : ''}`} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to establish and grow your international business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose GlobalForm?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We make international company formation simple, fast, and affordable. 
                Our expert team handles all the complexity so you can focus on building your business.
              </p>
              <div className="space-y-4">
                {[
                  'Expert guidance throughout the entire process',
                  'Transparent pricing with no hidden fees',
                  'Fast turnaround times in every jurisdiction',
                  'Ongoing support and compliance management',
                  '100% money-back guarantee if formation fails',
                  '24/7 customer support via chat, email, and phone'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-2xl text-white">
                <Shield className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-emerald-100">Secure & Compliant</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl text-white mt-8">
                <Globe className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">5</h3>
                <p className="text-blue-100">Countries Covered</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-8 rounded-2xl text-white -mt-8">
                <Clock className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">24-48h</h3>
                <p className="text-orange-100">Fastest Formation</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl text-white">
                <TrendingUp className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">99.8%</h3>
                <p className="text-purple-100">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-emerald-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Global Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of entrepreneurs who've trusted us with their company formation. 
            Get started today with a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8"
              onClick={() => navigate('/country/uk')}
            >
              Start Formation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
            >
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-6 h-6 text-emerald-500" />
                <span className="text-xl font-bold text-white">GlobalForm</span>
              </div>
              <p className="text-sm text-gray-400">
                Professional company formation services worldwide. Fast, reliable, and affordable.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Countries</h4>
              <ul className="space-y-2 text-sm">
                {countries.map(country => (
                  <li key={country.id}>
                    <a href={`/country/${country.id}`} className="hover:text-emerald-500 transition-colors">
                      {country.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Company Formation</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Tax Registration</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Banking Assistance</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@globalform.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Support: 24/7 Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 GlobalForm. All rights reserved. Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
