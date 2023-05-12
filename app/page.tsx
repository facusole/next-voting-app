import api from "@/api"
import BallotClientPage from "./client";

export default async function Home() {

  const ballots = await api.ballot.list();

  return (
    <main>
      <h1 className="text-4xl text-center font-bold">Movie <span className="gradient-text font-semibold">awards</span> 2021</h1>
      <BallotClientPage ballots={ballots} />
    </main>
  )
}
