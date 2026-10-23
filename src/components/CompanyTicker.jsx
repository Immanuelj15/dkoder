import React from 'react';

const companies = [
  { name: 'Google', slug: 'google' },
  { name: 'Microsoft', slug: 'microsoft' },
  { name: 'Amazon', slug: 'amazon' },
  { name: 'TCS', slug: 'tcs' },
  { name: 'Infosys', slug: 'infosys' },
  { name: 'Wipro', slug: 'wipro' },
  { name: 'Cognizant', slug: 'cognizant' },
  { name: 'Accenture', slug: 'accenture' },
  { name: 'IBM', slug: 'ibm' },
  { name: 'Oracle', slug: 'oracle' },
  { name: 'Cisco', slug: 'cisco' },
  { name: 'Zoho', slug: 'zoho' },
  { name: 'HCLTech', slug: 'hcl' },
  { name: 'Adobe', slug: 'adobe' },
  { name: 'Salesforce', slug: 'salesforce' },
  { name: 'Nvidia', slug: 'nvidia' },
  { name: 'Flipkart', slug: 'flipkart' },
  { name: 'Apple', slug: 'apple' },
  { name: 'Meta', slug: 'meta' },
  { name: 'Samsung', slug: 'samsung' },
  { name: 'Goldman Sachs', slug: 'goldmansachs' },
  { name: 'Visa', slug: 'visa' },
  { name: 'PayPal', slug: 'paypal' },
  { name: 'Atlassian', slug: 'atlassian' },
  { name: 'SAP', slug: 'sap' },
  { name: 'Qualcomm', slug: 'qualcomm' }
];

export default function CompanyTicker() {
  return (
    <section className="clb-band" aria-label="Companies you can prepare for">
      <div className="clb-inner">
        <div className="clb-label">
          Prepare for roles at top companies
        </div>

        <div className="clb-viewport">
          <div className="clb-track">
            {/* First set */}
            {companies.map((co) => (
              <div
                key={`co-1-${co.slug}`}
                className="clb-item"
                aria-label={`Practice ${co.name} questions`}
              >
                <img
                  src={`/company-logos/${co.slug}.svg`}
                  alt={`${co.name} logo`}
                  className="h-5 w-auto max-w-[90px] object-contain filter grayscale contrast-200"
                />
                <span className="clb-name font-bold text-sm text-[#1a1a1a]">{co.name}</span>
              </div>
            ))}

            {/* Duplicate set for seamless looping */}
            {companies.map((co) => (
              <div
                key={`co-2-${co.slug}`}
                className="clb-item"
                aria-hidden="true"
                tabIndex={-1}
              >
                <img
                  src={`/company-logos/${co.slug}.svg`}
                  alt=""
                  className="h-5 w-auto max-w-[90px] object-contain filter grayscale contrast-200"
                />
                <span className="clb-name font-bold text-sm text-[#1a1a1a]">{co.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
