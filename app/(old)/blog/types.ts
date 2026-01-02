export interface BlogData {
  sys_id: string;
  u_title: string;
  description: string;
  key?: string;
  u_url: string;
  u_banner_image: string;
  text: string;
  meta?: string;
  meta_description?: string;
  workflow_state?: string;
  [key: string]: any; // Allow for other fields from the API
}

export interface BlogPageProps {
  params: Promise<{
    blogId: string;
  }>;
}
