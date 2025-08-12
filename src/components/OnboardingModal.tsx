'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface OnboardingData {
  service: string;
  businessName: string;
  businessType: string;
  budget: string;
  timeline: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  description: string;
}

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OnboardingModal = ({ isOpen, onClose }: OnboardingModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    service: '',
    businessName: '',
    businessType: '',
    budget: '',
    timeline: '',
    contactInfo: {
      name: '',
      email: '',
      phone: ''
    },
    description: ''
  });

  const totalSteps = 5;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const updateData = (field: keyof OnboardingData | 'contactInfo', value: string | { name: string; email: string; phone: string }) => {
    if (field === 'contactInfo') {
      setData(prev => ({
        ...prev,
        contactInfo: { ...prev.contactInfo, ...(value as { name: string; email: string; phone: string }) }
      }));
    } else {
      setData(prev => ({ ...prev, [field]: value }));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    onClose();
    setCurrentStep(1);
    setData({
      service: '',
      businessName: '',
      businessType: '',
      budget: '',
      timeline: '',
      contactInfo: { name: '', email: '', phone: '' },
      description: ''
    });
  };

  const services = [
    { id: 'branding', name: 'Brand Strategy', icon: '🎨' },
    { id: 'website', name: 'Web Design / Development', icon: '💻' },
    { id: 'marketing', name: 'Growth Partnership & SEO', icon: '📈' },
    { id: 'content', name: 'Copywriting & Messaging', icon: '💡' },
  ];

  const businessTypes = [
    'Startup',
    'Small Business',
    'Medium Business',
    'Enterprise',
    'Non-Profit',
    'Agency',
    'Other'
  ];

  const budgets = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' }
  ];

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-2-weeks', label: '1-2 weeks' },
    { value: '1-month', label: '1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3+months', label: '3+ months' }
  ];

  if (!isOpen) return null;

  return (
    <div className="onboarding-modal-overlay">
      <div className="onboarding-modal">
        <div className="modal-header">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <img src="/common/imgs/icons/times-solid.svg" alt="Close" />
          </button>
        </div>

        <div className="modal-content">
          {currentStep === 1 && (
            <div className="step-content">
              <div className="step-header">
                <h2>What can we help you with?</h2>
                <p>Choose the service that best fits your needs</p>
              </div>
              <div className="services-grid">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`service-card ${data.service === service.id ? 'selected' : ''}`}
                    onClick={() => updateData('service', service.id)}
                  >
                    <div className="service-icon">{service.icon}</div>
                    <h4 className="service-name">{service.name}</h4>
                  </div>
                ))}
              </div>
              <div className="step-actions">
                <button 
                  className="next-btn" 
                  onClick={nextStep}
                  disabled={!data.service}
                >
                  Continue
                  <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="step-content">
              <div className="step-header">
                <h2>Tell us about your business</h2>
                <p>This helps us understand your needs better</p>
              </div>
              <div className="form-group">
                <label>Business Name</label>
                <input
                  type="text"
                  value={data.businessName}
                  onChange={(e) => updateData('businessName', e.target.value)}
                  placeholder="Enter your business name"
                />
              </div>
              <div className="form-group">
                <label>Business Type</label>
                <select
                  value={data.businessType}
                  onChange={(e) => updateData('businessType', e.target.value)}
                >
                  <option value="">Select business type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="step-actions">
                <button className="back-btn" onClick={prevStep}>
                  <img src="/common/imgs/icons/angle-left-solid.svg" alt="" />
                  Back
                </button>
                <button 
                  className="next-btn" 
                  onClick={nextStep}
                  disabled={!data.businessName || !data.businessType}
                >
                  Continue
                  <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="step-content">
              <div className="step-header">
                <h2>Project Details</h2>
                <p>Help us understand your project scope</p>
              </div>
              <div className="form-group">
                <label>Budget Range</label>
                <div className="radio-group">
                  {budgets.map((budget) => (
                    <label key={budget.value} className="radio-option d-flex">
                      <input
                        type="radio"
                        name="budget"
                        value={budget.value}
                        checked={data.budget === budget.value}
                        onChange={(e) => updateData('budget', e.target.value)}
                      />
                      <span className="radio-custom"></span>
                      <span>{budget.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Timeline</label>
                <div className="radio-group">
                  {timelines.map((timeline) => (
                    <label key={timeline.value} className="radio-option d-flex">
                      <input
                        type="radio"
                        name="timeline"
                        value={timeline.value}
                        checked={data.timeline === timeline.value}
                        onChange={(e) => updateData('timeline', e.target.value)}
                      />
                      <span className="radio-custom"></span>
                      {timeline.label}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Project Description</label>
                <textarea
                  value={data.description}
                  onChange={(e) => updateData('description', e.target.value)}
                  placeholder="Tell us about your project goals, requirements, and any specific needs..."
                  rows={4}
                />
              </div>
              <div className="step-actions">
                <button className="back-btn" onClick={prevStep}>
                  <img src="/common/imgs/icons/angle-left-solid.svg" alt="" />
                  Back
                </button>
                <button 
                  className="next-btn" 
                  onClick={nextStep}
                  disabled={!data.budget || !data.timeline}
                >
                  Continue
                  <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="step-content">
              <div className="step-header">
                <h2>Contact Information</h2>
                <p>Lets get in touch to discuss your project</p>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={data.contactInfo.name}
                    onChange={(e) => updateData('contactInfo', { name: e.target.value, email: data.contactInfo.email, phone: data.contactInfo.phone })}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={data.contactInfo.email}
                    onChange={(e) => updateData('contactInfo', { email: e.target.value, name: data.contactInfo.name, phone: data.contactInfo.phone })}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={data.contactInfo.phone}
                  onChange={(e) => updateData('contactInfo', { phone: e.target.value, name: data.contactInfo.name, email: data.contactInfo.email })}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="step-actions">
                <button className="back-btn" onClick={prevStep}>
                  <img src="/common/imgs/icons/angle-left-solid.svg" alt="" />
                  Back
                </button>
                <button 
                  className="next-btn" 
                  onClick={nextStep}
                  disabled={!data.contactInfo.name || !data.contactInfo.email}
                >
                  Continue
                  <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="step-content">
              <div className="step-header">
                <h2>Schedule a Call</h2>
                <p>Lets discuss your project in detail</p>
              </div>
              <div className="summary-card">
                <h3>Project Summary</h3>
                <div className="summary-item">
                  <strong>Service:</strong> {services.find(s => s.id === data.service)?.name}
                </div>
                <div className="summary-item">
                  <strong>Business:</strong> {data.businessName}
                </div>
                <div className="summary-item">
                  <strong>Budget:</strong> {budgets.find(b => b.value === data.budget)?.label}
                </div>
                <div className="summary-item">
                  <strong>Timeline:</strong> {timelines.find(t => t.value === data.timeline)?.label}
                </div>
              </div>
              <div className="contact-options">
                <div className="contact-option">
                  <div className="option-icon">📞</div>
                  <h4>Schedule a Call</h4>
                  <p>Book a 30-minute consultation call to discuss your project</p>
                  <Link 
                    href="https://calendly.com/your-calendar" 
                    target="_blank"
                    className="schedule-btn"
                  >
                    Book Now
                  </Link>
                </div>
                <div className="contact-option">
                  <div className="option-icon">📧</div>
                  <h4>Send Email</h4>
                  <p>We will review your information and get back to you within 24 hours</p>
                  <button className="email-btn" onClick={handleSubmit}>
                    Submit Information
                  </button>
                </div>
              </div>
              <div className="step-actions">
                <button className="back-btn" onClick={prevStep}>
                  <img src="/common/imgs/icons/angle-left-solid.svg" alt="" />
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .onboarding-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .onboarding-modal {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: modalSlideIn 0.3s ease-out;
          position: absolute;
          top: 15vh;
          z-index: 999999;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-header {
          position: relative;
          padding: 30px 30px 20px;
          border-bottom: none;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background: #f0f0f0;
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 20px;
          margin-top: 30px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #20255D, #20255D);
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: #f0f0f0;
        }

        .close-btn img {
          width: 16px;
          height: 16px;
        }

        .modal-content {
          padding: 0 30px 30px;
          max-height: calc(90vh - 200px);
          overflow-y: auto;
          border: none !important;
        }

        .step-content {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .step-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .step-header h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #232323;
        }

        .step-header p {
          font-size: 16px;
          color: #666;
          margin: 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 10px;
          margin-bottom: 40px;
        }

        .service-card {
          padding: 20px 15px;
          border: 2px solid #f0f0f0;
          border-radius: 15px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background: #fff;
        }

        .service-card:hover {
          border-color: #20255D;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 123, 255, 0.1);
        }

        .service-card.selected {
          border-color: #20255D;
          background: linear-gradient(135deg, #20255D, #20255D);
          h4 {
            color: #ffffff !important;
          }
        }

        .service-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .service-card h4 {
          font-size: 12px;
          font-weight: 600;
          margin: 0;
          color: #20255D;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 4px;
          color: #232323;
          font-size: 12px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #20255D;
          border-radius: 10px;
          font-size: 12px;
          transition: border-color 0.3s;
          background: #ffffff;
          color: #232323;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #20255D;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .radio-option {
          display: flex;
          align-items: center;
          padding: 10px;
          border: 1px solid #f0f0f0;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s;
          background: #fff;
        }

        .radio-option:hover {
          border-color: #20255D;
        }

        .radio-option input[type="radio"] {
          display: none;
        }

        .radio-custom {
          width: 20px;
          height: 20px;
          border: 2px solid #ddd;
          border-radius: 50%;
          margin-right: 15px;
          position: relative;
          transition: all 0.3s;
        }

        .radio-option input[type="radio"]:checked + .radio-custom {
          border-color: #20255D;
          background: #20255D;
        }

        .radio-option input[type="radio"]:checked + .radio-custom::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
        }

        .step-actions {
          display: flex;
          justify-content: end;
          align-items: center;
          margin-top: 40px;
        }

        .back-btn,
        .next-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 25px;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .back-btn {
          background: #f0f0f0;
          color: #232323;
        }

        .back-btn:hover {
          background: #e0e0e0;
        }

        .next-btn {
          background: #F5D60D;
          color: #232323;
        }

        .next-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
        }

        .next-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .next-btn img {
          width: 16px;
          height: 16px;
          transition: transform 0.3s;
        }

        .next-btn:hover:not(:disabled) img {
          transform: translateX(3px);
        }

        .summary-card {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 15px;
          margin-bottom: 30px;
        }

        .summary-card h3 {
          margin: 0 0 20px 0;
          color: #232323;
        }

        .summary-item {
          margin-bottom: 10px;
          color: #232323;
        }

        .contact-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .contact-option {
          text-align: center;
          padding: 25px;
          border: 1px solid #f0f0f0;
          border-radius: 15px;
          transition: all 0.3s;
        }

        .contact-option:hover {
          border-color: #20255D;
          transform: translateY(-2px);
        }

        .option-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .contact-option h4 {
          margin: 0 0 10px 0;
          color: #232323;
        }

        .contact-option p {
          margin: 0 0 20px 0;
          color: #666;
          font-size: 14px;
        }

        .schedule-btn,
        .email-btn {
          display: inline-block;
          padding: 12px 25px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }

        .schedule-btn {
          background: linear-gradient(135deg, #20255D, #20255D);
          color: white;
        }

        .schedule-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(40, 167, 69, 0.3);
        }

        .email-btn {
          background: linear-gradient(135deg, #20255D, #20255D);
          color: white;
        }

        .email-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
        }

        @media (max-width: 768px) {
          .onboarding-modal {
            margin: 10px;
            max-height: 95vh;
          }

          .modal-header,
          .modal-content {
            padding: 20px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-options {
            grid-template-columns: 1fr;
          }

          .step-actions {
            flex-direction: column;
            gap: 15px;
          }

          .back-btn,
          .next-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default OnboardingModal;