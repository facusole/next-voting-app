"use client";

import type { Ballot, Nominee } from "@/types";
import { useState } from "react";

type Props = {
    ballots: Ballot[];
}

export default function BallotClientPage({ballots}: Props) {

    const [votes, setVotes] = useState(() => new Map<Ballot['title'], Nominee>)


    function handleVote(ballotTitle: Ballot['title'], nominee: Nominee) {
        const draft = structuredClone(votes);

        draft.set(ballotTitle, nominee)

        setVotes(draft)
    }

    function handleSubmit() {
       alert( Array.from(votes.entries()).map(([ballotTitle, nominee]) => `${ballotTitle}: ${nominee.title}`).join('\n') )
    }

    return <section className="max-w-[70ch] mx-auto">
        {ballots.map((ballot) => (
        <article  key={ballot.id}>
          <h2 className="text-3xl my-4 text-center">{ballot.title}</h2>
          <ul className="flex flex-col gap-2">
            {ballot.items.map((nominee) => (
              <li className="flex justify-between p-4" key={nominee.id} style={{backgroundColor: votes.get(ballot.title)?.id === nominee.id ? '#a38a17' : 'none'}}>
                <span>{nominee.title}</span>
                <button className="border border-solid gradient-border transition-all ml-4 px-4 select-none" onClick={() => handleVote(ballot.title, nominee)}>Vote</button>
            </li>
            ))}
          </ul>
        </article>
      ))}
      <div className="text-center"><button className="gradient p-4 rounded text-xl hover:scale-105 transition-all mb-8 select-none" onClick={handleSubmit}>Submit votes</button></div>
    </section>
}