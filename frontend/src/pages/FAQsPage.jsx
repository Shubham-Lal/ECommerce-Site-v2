import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import styles from '../styles/styles';
import { OpenSVG } from "../assets/open";
import { CloseSVG } from "../assets/close";
import { faqData } from '../static/data';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    }
    else {
      setActiveTab(tab);
    }
  }

  return (
    <div className={`${styles.section} my-8`}>
      <div className="h-[5rem] 800px:h-0" />
      <h2 className="text-3xl font-bold text-gray-900 mb-8 font-Poppins">
        FAQs
      </h2>
      <div className="mx-auto space-y-4">
        {faqData.map((data, index) => (
          <div className="border-b border-gray-200 pb-4" key={index}>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(data.id)}
            >
              <span className="text-lg font-medium text-gray-900">
                {data.question}
              </span>
              {activeTab === data.id ? (
                <CloseSVG />
              ) : (
                <OpenSVG />
              )}
            </button>
            {activeTab === data.id && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  {data.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const FAQsPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <FAQ />
      <Footer hideSubscription />
    </div>
  )
}

export default FAQsPage