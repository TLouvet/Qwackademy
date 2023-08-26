import PageLayout from '@/components/Layout/PageLayout';

export default function ProfilePage() {
  return (
    <PageLayout withBackLink>
      <h1>My Qwacker Profile</h1>

      <p>Avatar</p>
      <p>Name</p>
      <p>Bio</p>
    </PageLayout>
  );
}
