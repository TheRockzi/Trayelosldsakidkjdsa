import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Truck, MapPin, Calendar, DollarSign, Home } from 'lucide-react';
import { US_STATES } from '../constants/states';
import emailjs from '@emailjs/browser';

export const QuoteForm = () => {
  const { t } = useTranslation();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init("1sqoHMqshSbu1bydp");

      const templateParams = {
        to_email: 'joseesde1234@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        from_location: `${formData.fromCity}, ${formData.fromState}`,
        to_location: `${formData.toCity}, ${formData.toState}`,
        move_date: formData.moveDate,
        home_size: formData.homeSize,
        special_items: formData.specialItems ? 'Yes' : 'No',
        message: formData.message,
        quote_details: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          From: ${formData.fromCity}, ${formData.fromState}
          To: ${formData.toCity}, ${formData.toState}
          Move Date: ${formData.moveDate}
          Home Size: ${formData.homeSize}
          Special Items: ${formData.specialItems ? 'Yes' : 'No'}
          Additional Message: ${formData.message}
        `
      };

      await emailjs.send(
        'service_ux6cc7u',
        'template_c5y5dwe',
        templateParams
      );

      alert(t('quote.success'));

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
    } catch (error) {
      console.error('Error sending email:', error);
      alert(t('quote.error'));
    } finally {
      setIsSubmitting(false);
    }
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
            <h4 className="text-lg font-semibold text-gray-700">{t('quote.personalInfo')}</h4>
            <input
              type="text"
              placeholder={t('quote.name')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
            <input
              type="email"
              placeholder={t('quote.email')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
            <input
              type="tel"
              placeholder={t('quote.phone')}
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
            <h4 className="text-lg font-semibold text-gray-700">{t('quote.moveDetails')}</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <select
                  value={formData.fromState}
                  onChange={(e) => setFormData({ ...formData, fromState: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                >
                  <option value="">{t('quote.fromState')}</option>
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
                  placeholder={t('quote.fromCity')}
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
                  <option value="">{t('quote.toState')}</option>
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
                  placeholder={t('quote.toCity')}
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
            <h4 className="text-lg font-semibold text-gray-700">{t('quote.additionalDetails')}</h4>
            <select
              value={formData.homeSize}
              onChange={(e) => setFormData({ ...formData, homeSize: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            >
              <option value="">{t('quote.selectHomeSize')}</option>
              <option value="studio">{t('quote.studio')}</option>
              <option value="1bed">{t('quote.oneBed')}</option>
              <option value="2bed">{t('quote.twoBed')}</option>
              <option value="3bed">{t('quote.threeBed')}</option>
              <option value="4bed">{t('quote.fourBed')}</option>
              <option value="office">{t('quote.office')}</option>
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
                {t('quote.specialItems')}
              </label>
            </div>
            <textarea
              placeholder={t('quote.additionalDetails')}
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
      className="bg-black/40 backdrop-blur-md rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02] border border-white/10"
    >
      <div className="mb-8">
        <h3 className="text-4xl font-bold gradient-text mb-2">{t('quote.title')}</h3>
        <p className="text-white/90">{t('quote.subtitle')}</p>
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
                    ? 'bg-primary text-black'
                    : 'bg-gray-600 text-gray-300'
                } transition-colors duration-300`}
              >
                {step === 1 && <Home size={16} />}
                {step === 2 && <MapPin size={16} />}
                {step === 3 && <Calendar size={16} />}
              </div>
              {step !== 3 && (
                <div
                  className={`h-1 flex-1 mx-2 ${
                    step < currentStep ? 'bg-primary' : 'bg-gray-600'
                  } transition-colors duration-300`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {renderStep()}

      <div className="flex justify-between mt-6 pt-4 border-t border-white/10">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-2 text-primary hover:text-primary/80 transition-colors"
          >
            {t('quote.back')}
          </button>
        )}
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="ml-auto px-6 py-2 bg-primary text-black font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2 hover:bg-primary/90"
          >
            <span>{t('quote.next')}</span>
            <Send size={18} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="ml-auto px-6 py-2 bg-primary text-black font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2 hover:bg-primary/90"
          >
            {isSubmitting ? (
              <Truck className="animate-float" />
            ) : (
              <>
                <span>{t('quote.getQuote')}</span>
                <DollarSign size={18} />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
};