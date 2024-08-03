import Header from "./components/Header";
import TeamForm from "./components/TeamForm";
import TeamList from "./components/TeamList";
import Welcome from "./components/Welcome";
import Head from "next/head";
import "../styles/globals.css";

export default function Home() {
    return (
      <div>
            <Head>
                <title>ATC Dream Match</title>
                <meta name="description" content="Create your dream football match" />
            </Head>
            <Header />
            <Welcome />
            <TeamList />
        </div>
    );
}
