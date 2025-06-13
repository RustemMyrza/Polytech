import '../Logo.js';
import React, { useState } from 'react';
import LanguageIcons from './Language/LanguageIcons.js';
import './Language/language_icons.css';
import './header.css';

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState('ru');

  const languages = [
    { code: 'ru', name: 'Русский', icon: 'https://img.icons8.com/?size=100&id=vioRCshpCBKv&format=png&color=000000' },
    { code: 'kz', name: 'Қазақша', icon: 'https://img.icons8.com/?size=100&id=WYQnJ00xxgjb&format=png&color=000000' },
  ];

  const handleLanguageSelect = (code) => {
    setSelectedLanguage(code);
  };

  return (
    <div className='header'>
      <header>
        <div className='language-block'>
          <LanguageIcons
                languages={languages}
                selectedLanguage={selectedLanguage}
                onLanguageSelect={handleLanguageSelect}
              />
        </div>
      </header>
    </div>
  );
}

export default Header;
