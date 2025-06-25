'use client'

import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  // Detect language from URL
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en'

  const text = {
    en: {
      title: 'Privacy Policy',
      subtitle: 'Your privacy is important to us. This policy explains how we collect, use, and protect your information.',
      welcome: 'Welcome to Logibyte\'s Privacy Policy. This policy describes how we handle your personal information.',
      infoWeCollect: '1. Information We Collect',
      infoWeCollectDesc: 'We may collect personal information that you provide to us directly, such as your name, email address, phone number, and any other information you choose to provide when you fill out a contact form, subscribe to our newsletter, or otherwise communicate with us.',
      howWeUse: '2. How We Use Your Information',
      howWeUseDesc: 'We use the information we collect to:',
      useList: [
        'Provide, operate, and maintain our services.',
        'Improve, personalize, and expand our services.',
        'Understand and analyze how you use our services.',
        'Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.',
        'Process your transactions.',
        'Find and prevent fraud.',
      ],
      infoSharing: '3. Information Sharing',
      infoSharingDesc: 'We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.',
      dataSecurity: '4. Data Security',
      dataSecurityDesc: 'We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.',
      yourRights: '5. Your Rights',
      yourRightsDesc: 'You have the right to access, correct, or delete your personal information. You can also object to the processing of your personal information, request that we limit the processing of your personal information, or request portability of your personal information.',
      changesToPolicy: '6. Changes to This Policy',
      changesToPolicyDesc: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.',
      contactUs: '7. Contact Us',
      contactUsDesc: 'If you have any questions about this Privacy Policy, please',
      contactLink: 'contact us',
      lastUpdated: 'This policy was last updated on',
      backgroundAlt: 'Data privacy background',
    },
    fr: {
      title: 'Politique de Confidentialité',
      subtitle: 'Votre vie privée est importante pour nous. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.',
      welcome: 'Bienvenue dans la Politique de Confidentialité de Logibyte. Cette politique décrit comment nous traitons vos informations personnelles.',
      infoWeCollect: '1. Informations que Nous Collectons',
      infoWeCollectDesc: 'Nous pouvons collecter des informations personnelles que vous nous fournissez directement, telles que votre nom, adresse e-mail, numéro de téléphone et toute autre information que vous choisissez de fournir lorsque vous remplissez un formulaire de contact, vous abonnez à notre newsletter ou communiquez autrement avec nous.',
      howWeUse: '2. Comment Nous Utilisons Vos Informations',
      howWeUseDesc: 'Nous utilisons les informations que nous collectons pour :',
      useList: [
        'Fournir, exploiter et maintenir nos services.',
        'Améliorer, personnaliser et étendre nos services.',
        'Comprendre et analyser comment vous utilisez nos services.',
        'Communiquer avec vous, soit directement soit par l\'intermédiaire de l\'un de nos partenaires, pour le service client, pour vous fournir des mises à jour et autres informations relatives au site web, et à des fins de marketing et de promotion.',
        'Traiter vos transactions.',
        'Détecter et prévenir la fraude.',
      ],
      infoSharing: '3. Partage d\'Informations',
      infoSharingDesc: 'Nous ne vendons, n\'échangeons ni ne transférons à des tiers vos informations personnellement identifiables, sauf si nous fournissons aux utilisateurs un préavis. Cela n\'inclut pas les partenaires d\'hébergement de sites web et autres parties qui nous aident à exploiter notre site web, à mener nos activités ou à servir nos utilisateurs, tant que ces parties acceptent de garder ces informations confidentielles.',
      dataSecurity: '4. Sécurité des Données',
      dataSecurityDesc: 'Nous mettons en œuvre une variété de mesures de sécurité pour maintenir la sécurité de vos informations personnelles lorsque vous saisissez, soumettez ou accédez à vos informations personnelles.',
      yourRights: '5. Vos Droits',
      yourRightsDesc: 'Vous avez le droit d\'accéder, de corriger ou de supprimer vos informations personnelles. Vous pouvez également vous opposer au traitement de vos informations personnelles, demander que nous limitions le traitement de vos informations personnelles, ou demander la portabilité de vos informations personnelles.',
      changesToPolicy: '6. Modifications de Cette Politique',
      changesToPolicyDesc: 'Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle Politique de Confidentialité sur cette page. Il vous est conseillé de consulter cette Politique de Confidentialité périodiquement pour tout changement.',
      contactUs: '7. Nous Contacter',
      contactUsDesc: 'Si vous avez des questions sur cette Politique de Confidentialité, veuillez',
      contactLink: 'nous contacter',
      lastUpdated: 'Cette politique a été mise à jour le',
      backgroundAlt: 'Arrière-plan de confidentialité des données',
    },
  }[lang]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-privacy.jpg"
            alt={text.backgroundAlt}
            className="w-full h-full object-cover object-center opacity-70 dark:opacity-60"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tech-title mb-6">{text.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {text.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 prose dark:prose-invert">
          <p className="lead">
            {text.welcome}
          </p>

          <h2>{text.infoWeCollect}</h2>
          <p>
            {text.infoWeCollectDesc}
          </p>

          <h2>{text.howWeUse}</h2>
          <p>
            {text.howWeUseDesc}
          </p>
          <ul>
            {text.useList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{text.infoSharing}</h2>
          <p>
            {text.infoSharingDesc}
          </p>

          <h2>{text.dataSecurity}</h2>
          <p>
            {text.dataSecurityDesc}
          </p>

          <h2>{text.yourRights}</h2>
          <p>
            {text.yourRightsDesc}
          </p>

          <h2>{text.changesToPolicy}</h2>
          <p>
            {text.changesToPolicyDesc}
          </p>

          <h2>{text.contactUs}</h2>
          <p>
            {text.contactUsDesc} <Link href={`${lang === 'fr' ? '/fr' : ''}/contact`}>{text.contactLink}</Link>.
          </p>

          <p>
            <em>{text.lastUpdated} {new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}.</em>
          </p>
        </div>
      </div>
    </div>
  )
} 