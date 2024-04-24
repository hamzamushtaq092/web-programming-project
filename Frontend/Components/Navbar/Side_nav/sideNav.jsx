import React from "react";
import "./sideNav.css";
import { useState } from "react";
function sideNav() {
  const [userManagementOpen, setUserManagementOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [manufacturingOpen, setManufacturingOpen] = useState(false);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);
  const [accountsOpen, setAccountsOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);
  const [notificationTemplatesOpen, setNotificationTemplatesOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [catalogQROpen, setCatalogQROpen] = useState(false);

  const toggleUserManagement = () => {
    setUserManagementOpen(!userManagementOpen);
  };

  const toggleContacts = () => {
    setContactsOpen(!contactsOpen);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

  
  

  const togglePurchase = () => {
    setPurchaseOpen(!purchaseOpen);
  };

  const toggleSell = () => {
    setSellOpen(!sellOpen);
  };

  const toggleAccounts = () => {
    setAccountsOpen(!accountsOpen);
  };

  const toggleReports = () => {
    setReportsOpen(!reportsOpen);
  };

  const toggleNotificationTemplates = () => {
    setNotificationTemplatesOpen(!notificationTemplatesOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const toggleCatalogQR = () => {
    setCatalogQROpen(!catalogQROpen);
  };
  return (
    <>
      <div className="Left_Navbar-header-container">
        <div className="Left_Navbar-header">
          <span className="Left_Navbar-header-logo">Logo|</span>
          <span className="Left_Navbar-header-title">TAHAA Textile</span>
        </div>
        <div className="Left_Navbar-body-container">
          <ul className="Left_Navbar-body">
            <li>Home</li>
            <li onClick={toggleUserManagement}>User Management</li>
            <ul className={`Nested-options ${userManagementOpen ? 'show' : ''}`}>
              <li>Users</li>
              <li>Roles</li>
            </ul>
            <li onClick={toggleContacts}>Contacts</li>
            <ul className={`Nested-options ${contactsOpen ? 'show' : ''}`}>
              <li>Suppliers</li>
              <li>Customers</li>
            </ul>
            <li onClick={toggleProducts}>Products</li>
            <ul className={`Nested-options ${productsOpen ? 'show' : ''}`}>
              <li>Product 1</li>
              <li>Product 2</li>
            </ul>

            <li>Manufacturing</li>

            <li onClick={togglePurchase}>Purchase</li>
            <ul className={`Nested-options ${purchaseOpen ? 'show' : ''}`}>
              <li>Users</li>
              <li>Roles</li>
            </ul>


            <li onClick={toggleSell}>Sell</li>
            <ul className={`Nested-options ${sellOpen ? 'show' : ''}`}>
              <li>Users</li>
              <li>Roles</li>
            </ul>
            <li>Accounting</li>

            <li onClick={toggleReports}>Report </li>
            <ul className={`Nested-options ${reportsOpen ? 'show' : ''}`}>
              <li>Users</li>
              <li>Roles</li>
            </ul>

            <li>Notification Templates</li>
            <li>Catalogue QR</li>

            


            
          </ul>
        </div>
      </div>
    </>
  );
}

export default sideNav;
