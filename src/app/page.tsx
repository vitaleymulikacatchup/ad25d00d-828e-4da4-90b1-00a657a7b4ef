"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Building2, Award, TrendingUp, Zap, Star, Crown, Heart, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="fluid"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Luxe Hotels"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917027219-q2rmosp2.jpg"
          logoAlt="Luxe Hotels Logo"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Guest Reviews", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Hospitality"
          description="Discover world-class accommodations, exceptional service, and unforgettable moments in our premium hotel. Your perfect getaway awaits."
          tag="Welcome to Luxe Hotels"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917027988-dcpz8bwk.jpg"
          imageAlt="Stunning luxury hotel lobby entrance"
          imagePosition="right"
          buttons={[
            { text: "Book Your Stay", href: "rooms" },
            { text: "View Amenities", href: "amenities" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardThree
          title="Our Room Collection"
          description="Choose from our carefully curated selection of luxurious rooms designed for your comfort and relaxation"
          tag="Premium Accommodations"
          tagIcon={Building2}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "room-1",
              name: "Deluxe Room",
              price: "$180/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917028658-knovx0vz.jpg",
              imageAlt: "Spacious deluxe hotel room",
              initialQuantity: 1
            },
            {
              id: "room-2",
              name: "Executive Suite",
              price: "$280/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917029123-ile2kcaq.jpg",
              imageAlt: "Luxury executive suite",
              initialQuantity: 1
            },
            {
              id: "room-3",
              name: "Standard Room",
              price: "$120/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917029857-k382hmz2.jpg",
              imageAlt: "Comfortable standard room",
              initialQuantity: 1
            },
            {
              id: "room-4",
              name: "Presidential Penthouse",
              price: "$450/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917030575-qqecez8f.jpg",
              imageAlt: "Exclusive penthouse suite",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardEight
          title="World-Class Amenities"
          description="Explore our comprehensive facilities designed to enhance your stay and provide ultimate relaxation"
          tag="Premium Facilities"
          tagIcon={Award}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Infinity Pool & Spa",
              description: "Rejuvenate in our Olympic-sized infinity pool overlooking the city, followed by holistic spa treatments",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917031819-1o5saf0q.jpg",
              imageAlt: "Luxury infinity pool at sunset"
            },
            {
              id: 2,
              title: "Wellness & Fitness",
              description: "State-of-the-art gym with personal trainers, yoga classes, and meditation spaces for your wellness journey",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917034866-gtbq8nfk.jpg",
              imageAlt: "Modern fitness center equipment"
            },
            {
              id: 3,
              title: "Fine Dining",
              description: "Award-winning restaurants and bars offering international cuisine prepared by Michelin-trained chefs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917033805-oe6u6xbr.jpg",
              imageAlt: "Elegant fine dining restaurant"
            },
            {
              id: 4,
              title: "Spa Sanctuary",
              description: "Pamper yourself with luxurious spa treatments, massages, and beauty services in a serene environment",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917032906-3h1agito.jpg",
              imageAlt: "Tranquil spa relaxation area"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Room Rates & Packages"
          description="Transparent pricing for every budget. All rates include breakfast, WiFi, and access to our facilities"
          tag="Best Value"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "standard",
              badge: "Value Choice",
              badgeIcon: Zap,
              price: "$120",
              subtitle: "Perfect for budget travelers",
              features: [
                "Comfortable room with city view",
                "Daily breakfast included",
                "WiFi access",
                "Fitness center access",
                "Business center"
              ]
            },
            {
              id: "deluxe",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$180",
              subtitle: "Best for comfort seekers",
              features: [
                "Spacious room with premium bedding",
                "Executive breakfast buffet",
                "High-speed WiFi",
                "Spa & pool access",
                "Room service 24/7",
                "Complimentary minibar"
              ]
            },
            {
              id: "suite",
              badge: "Premium Experience",
              badgeIcon: Crown,
              price: "$280",
              subtitle: "Luxury experience included",
              features: [
                "Executive suite with living area",
                "Gourmet breakfast & lunch",
                "Priority WiFi",
                "Private spa access",
                "Personal concierge",
                "Airport transfers",
                "Exclusive lounge access"
              ]
            },
            {
              id: "penthouse",
              badge: "Ultimate Luxury",
              badgeIcon: Sparkles,
              price: "$450",
              subtitle: "The finest accommodations",
              features: [
                "Presidential penthouse suite",
                "All-day dining & premium bar",
                "Dedicated concierge",
                "Private spa & pool access",
                "Chef's table experiences",
                "Helicopter transfers available",
                "Personalized service team"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real experiences from travelers who have enjoyed our hospitality"
          tag="Guest Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917035743-3ueyfpk6.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              company: "Wanderlust Chronicles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917036446-cmoeebqg.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Event Organizer",
              company: "Elite Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917037442-9aj4kzq3.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Business Executive",
              company: "Global Ventures",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917037969-i95x88t2.jpg",
              imageAlt: "David Thompson"
            },
            {
              id: "5",
              name: "Lisa Anderson",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917038709-grt4p6lu.jpg",
              imageAlt: "Lisa Anderson"
            },
            {
              id: "6",
              name: "James Wilson",
              role: "Entrepreneur",
              company: "StartUp Hub",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763917039431-a5kgfmv6.jpg",
              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our hotel, bookings, and services"
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request subject to availability. Contact our front desk for more details."
            },
            {
              id: "2",
              title: "Do you offer airport shuttle service?",
              content: "Yes, we provide complimentary airport shuttle service for guests staying three nights or more. For shorter stays, transportation can be arranged at a nominal fee. Our concierge team will assist with arrangements."
            },
            {
              id: "3",
              title: "Are pets allowed in the rooms?",
              content: "We welcome well-behaved pets in selected rooms. A pet fee of $25 per night applies. Please inform us during booking or contact our front desk in advance to ensure pet-friendly room availability."
            },
            {
              id: "4",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and bank transfers. Digital wallets and mobile payment options are also available for your convenience."
            },
            {
              id: "5",
              title: "Is WiFi included with all room rates?",
              content: "Yes, high-speed WiFi is complimentary for all guests. Each room has secure WiFi access. Additional bandwidth is available upon request at no extra charge."
            },
            {
              id: "6",
              title: "Can I book directly with your hotel?",
              content: "Absolutely! Booking directly with our hotel often provides better rates and exclusive offers. Contact our reservations team at (555) 123-4567 or use our online booking system for instant confirmation."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch with Us"
          description="Have questions about our rooms, amenities, or services? Our dedicated team is ready to assist you. Fill out the form below or call us directly."
          buttonText="Send Message"
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Your Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "your.email@example.com",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "+1 (555) 123-4567",
              required: false
            },
            {
              name: "subject",
              type: "text",
              placeholder: "Subject of your inquiry",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how we can help you...",
            rows: 6,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Luxe Hotels"
          copyrightText="© 2025 Luxe Hotels. All rights reserved. | Crafted for your comfort"
          columns={[
            {
              title: "Rooms",
              items: [
                { label: "Standard Room", href: "rooms" },
                { label: "Deluxe Room", href: "rooms" },
                { label: "Executive Suite", href: "rooms" },
                { label: "Penthouse", href: "rooms" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "amenities" },
                { label: "Spa & Wellness", href: "amenities" },
                { label: "Event Spaces", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}