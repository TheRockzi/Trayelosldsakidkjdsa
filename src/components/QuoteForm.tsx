import React, { useState } from 'react';
import { Send, Truck, MapPin, Calendar, DollarSign, Home } from 'lucide-react';
import { US_STATES } from '../constants/states';

export const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fromState: '',
    fromCity: '',
    toState: '',
    toCity: '',
    moveDate: '',
    homeSize: '',
    specialItems: false,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Animate truck moving across screen
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        fromState: '',
        fromCity: '',
        toState: '',
        toCity: '',
        moveDate: '',
        homeSize: '',
        specialItems: false,
        message: ''
      });
      setCurrentStep(1);
    }, 2000);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 animate-slide-in">
            <h4 className="text-lg font-semibold text-gray-700">Personal Information</h4>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-slide-in">
            <h4 className="text-lg font-semibold text-gray-700">Move Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <select
                  value={formData.fromState}
                  onChange={(e) => setFormData({ ...formData, fromState: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                >
                  <option value="">From State</option>
                  {US_STATES.map((state) => (
                    <option key={state.code} value={state.code}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="From City"
                  value={formData.fromCity}
                  onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <select
                  value={formData.toState}
                  onChange={(e) => setFormData({ ...formData, toState: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                >
                  <option value="">To State</option>
                  {US_STATES.map((state) => (
                    <option key={state.code} value={state.code}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="To City"
                  value={formData.toCity}
                  onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            <input
              type="date"
              value={formData.moveDate}
              onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-slide-in">
            <h4 className="text-lg font-semibold text-gray-700">Additional Details</h4>
            <select
              value={formData.homeSize}
              onChange={(e) => setFormData({ ...formData, homeSize: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            >
              <option value="">Select Home Size</option>
              <option value="studio">Studio</option>
              <option value="1bed">1 Bedroom</option>
              <option value="2bed">2 Bedrooms</option>
              <option value="3bed">3 Bedrooms</option>
              <option value="4bed">4+ Bedrooms</option>
              <option value="office">Office</option>
            </select>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="specialItems"
                checked={formData.specialItems}
                onChange={(e) => setFormData({ ...formData, specialItems: e.target.checked })}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="specialItems" className="text-gray-700">
                I have special items (piano, art, antiques)
              </label>
            </div>
            <textarea
              placeholder="Additional details about your move..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-3xl"
    >
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">Get Your Free Quote</h3>
        <p className="text-gray-600">Tell us about your move and we'll provide a free estimate</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex items-center ${step !== 3 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentStep
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-500'
                } transition-colors duration-300`}
              >
                {step === 1 && <Home size={16} />}
                {step === 2 && <MapPin size={16} />}
                {step === 3 && <Calendar size={16} />}
              </div>
              {step !== 3 && (
                <div
                  className={`h-1 flex-1 mx-2 ${
                    step < currentStep ? 'bg-primary' : 'bg-gray-200'
                  } transition-colors duration-300`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {renderStep()}

      <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Back
          </button>
        )}
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="ml-auto px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>Next</span>
            <Send size={18} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="ml-auto px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            {isSubmitting ? (
              <Truck className="animate-drive" />
            ) : (
              <>
                <span>Get Quote</span>
                <DollarSign size={18} />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
};