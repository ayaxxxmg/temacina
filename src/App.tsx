  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  import OurServices from './pages/Our services/Ourservices';
  import Tamacina from './pages/Temacina/Tamacina';
  import TermsAndConditions from './pages/GCU/TermsAndConditions';
  import Gtsc from './pages/GTSC/Gtsc';
  import PrivacyPolicyViewer from './Privacypolicy/PrivacyPolicyViewer';
  import ProductCompliancePolicy from './ProductCompliance/ProductCompliance';
  import './i18n';
  import RouterConfig from './pages/HelpCenter/layouts/RouterConfig';

  function App() {
    return (
      <>
      <RouterConfig />
      </>
    );
  }

  export default App;
