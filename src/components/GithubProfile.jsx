import { useEffect, useState } from "react";

const API_URL = "https://api.github.com/users/mhajar-salma";

function GithubProfile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Erreur lors du chargement du profil GitHub");
        }
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchProfile();
  }, []);

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  if (!profile) {
    return <p>Chargement du profil GitHub...</p>;
  }

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: "520px" }}>
      <div className="card-body d-flex align-items-center">
        <img
          src={profile.avatar_url}
          alt={profile.login}
          className="rounded-circle me-4"
          style={{ width: "96px", height: "96px", objectFit: "cover" }}
        />
        <div>
          <h3 className="h5 mb-1">{profile.name || "salma mhajar"}</h3>
          <p className="mb-2 small text-muted">@{profile.login}</p>
          {profile.bio && <p className="mb-2 small">{profile.bio}</p>}
          <p className="mb-1 small">
            <strong>Repos publics :</strong> {profile.public_repos}
          </p>
          <p className="mb-1 small">
            <strong>Followers :</strong> {profile.followers}
          </p>
          <a
            href={profile.html_url}
            className="btn btn-sm btn-primary mt-2"
            target="_blank"
            rel="noreferrer"
          >
            Voir le profil GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default GithubProfile;
