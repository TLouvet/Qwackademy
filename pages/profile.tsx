import PageLayout from '@/components/Layout/PageLayout';

export default function ProfilePage() {
  return (
    <PageLayout withBackLink title='My Qwacker Profile'>
      <p>Avatar</p>
      <p>Name</p>
      <p>Bio</p>
    </PageLayout>
  );
}
