type SoftProgram = {
  className: string;
  title: string;
  description: string[];
};

type SoftMeeting = {
  sublocation?: string;
  date: string;
  location: string;
};

export const SoftPrograms: SoftProgram[] = [
  {
    className: "benefits",
    title: "Benefits You Get",
    description: [
      "Improve coding skills (better at coding & problem solving)",
      "Teamwork experience (collaboration like in the real world of work)",
      "Project portfolio (have work for CV)",
      "Networking (meet people who like the same things)",
      "Mentorship (get help and advice from experienced people)",
    ],
  },

  {
    className: "what-you-do",
    title: "What You’ll Do",
    description: [
      "Making projects – creating or developing a project in the lab.",
      "Sharing knowledge – sharing ideas or information with others.",
      "Team collaboration – working together to complete tasks.",
      "Brainstorming ideas – discussing to find new ideas or solutions.",
      "Project review – checking and improving the project.",
    ],
  },
];

export const SoftMeetings: SoftMeeting[] = [
  {
    date: "friday",
    location: "Lab RPL",
  },
  {
    date: "saturday",
    location: "Via Meet",
  },
];
