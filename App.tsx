import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Auth from './pages/Auth'; // Keeping for backward compatibility if needed, but will update main routes
import ClientDashboard from './pages/dashboard/ClientDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import AIChat from './pages/tools/AIChat';
import ContentCalendar from './pages/tools/ContentCalendar';
import AdBudget from './pages/tools/AdBudget';
import CompetitorAnalysis from './pages/tools/CompetitorAnalysis';
import ImageGen from './pages/tools/ImageGen';
import AIToolsPage from './pages/AIToolsPage';
import CampaignsList from './pages/campaigns/CampaignsList';
import LeadsList from './pages/admin/LeadsList';
import AdminHistory from './pages/admin/AdminHistory';
import UsersList from './pages/admin/UsersList';
import CampaignsAdmin from './pages/admin/CampaignsAdmin';
import Settings from './pages/Settings';
import AIHistory from './pages/tools/AIHistory';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import WhatsAppButton from './components/shared/WhatsAppButton';
import AIButton from './components/shared/AIButton';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/auth" element={<Navigate to="/login" replace />} />
          
          {/* Dashboard & Admin */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <ClientDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />

          <Route path="/campaigns" element={
            <ProtectedRoute>
              <CampaignsList />
            </ProtectedRoute>
          } />

          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />

          {/* Admin Routes */}
          <Route path="/admin/leads" element={
            <ProtectedRoute role="admin">
              <LeadsList />
            </ProtectedRoute>
          } />

          <Route path="/admin/campaigns" element={
            <ProtectedRoute role="admin">
              <CampaignsAdmin />
            </ProtectedRoute>
          } />
          <Route path="/admin/history" element={
            <ProtectedRoute role="admin">
              <AdminHistory />
            </ProtectedRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedRoute role="admin">
              <UsersList />
            </ProtectedRoute>
          } />

          {/* AI Tools */}
          <Route path="/tools/chat" element={
            <ProtectedRoute>
              <AIChat />
            </ProtectedRoute>
          } />
          <Route path="/tools/planner" element={
            <ProtectedRoute>
              <ContentCalendar />
            </ProtectedRoute>
          } />
          <Route path="/tools/budget" element={
            <ProtectedRoute>
              <AdBudget />
            </ProtectedRoute>
          } />
          <Route path="/tools/competitor" element={
            <ProtectedRoute>
              <CompetitorAnalysis />
            </ProtectedRoute>
          } />
          <Route path="/tools/image" element={
            <ProtectedRoute>
              <ImageGen />
            </ProtectedRoute>
          } />
          <Route path="/tools" element={
            <ProtectedRoute>
              <AIToolsPage />
            </ProtectedRoute>
          } />

          <Route path="/history" element={
            <ProtectedRoute>
              <AIHistory />
            </ProtectedRoute>
          } />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <WhatsAppButton />
        <AIButton />
      </BrowserRouter>
    </AuthProvider>
  );
}


