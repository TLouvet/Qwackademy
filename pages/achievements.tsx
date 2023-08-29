import PageLayout from '@/components/Layout/PageLayout';

export default function AchievementsPage() {
  return (
    <PageLayout withBackLink>
      <h1>Hall of Achievements</h1>
      <p>Here is the list of achievements that will make you one true Master Qwacker</p>

      <h2>MiniQwacker</h2>
      <p>Play games and reach great scores in MiniQwacker mode</p>
      <ul>
        <li>
          <article>
            <h3>Qwackematician</h3>
            <h4>Training</h4>
            <p>X - Try your skill for the first time with the Qwackematician Sequence</p>
            <p>X - Try your skill 10 times with the Qwackematician Sequence</p>
            <p>X - Try your skill 50 times with the Qwackematician Sequence</p>
            <p>V - Try your skill 100 times with the Qwackematician Sequence </p>
            <h4>Scoring</h4>
            <p>X - Reach the level 5 in the Qwackematician Sequence</p>
            <p>X - Reach the level 10 in the Qwackematician Sequence</p>
            <p>X - Reach the level 15 in the Qwackematician Sequence</p>
            <p>X - Reach the level 20 in the Qwackematician Sequence</p>
          </article>
        </li>
      </ul>

      <h2></h2>
      <ul></ul>

      <h2>Master Qwacker</h2>
      <ul></ul>
    </PageLayout>
  );
}
