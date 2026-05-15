export type UserRole = 'client' | 'admin';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  createdAt: string;
  businessName?: string;
  whatsapp?: string;
}

export type CampaignStatus = 'planned' | 'active' | 'completed';
export type MarketingPlatform = 'facebook' | 'instagram' | 'meta-all';

export interface MarketingCampaign {
  id?: string;
  userId: string;
  name: string;
  status: CampaignStatus;
  budget: number;
  platform: MarketingPlatform;
  startDate: string;
  endDate: string;
  notes?: string;
  updatedAt?: string;
}

export interface GeneratedContent {
  id?: string;
  userId: string;
  type: string; // 'fb_post', 'ig_caption', 'hashtag', 'ad_copy', 'reel_script', 'business_name', 'image_prompt'
  prompt: string;
  content: string;
  createdAt: string;
}

export interface ContactLead {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  createdAt: string;
}
