(function () {
  const STORAGE_KEY = "starJar.notes.v1";

  /** @type {{ text: string, author: string }[]} */
  const QUOTES = [
    {
      text: "Either you run the day or the day runs you.",
      author: "Jim Rohn",
    },
    {
      text: "Discipline is the bridge between goals and accomplishment.",
      author: "Jim Rohn",
    },
    {
      text: "Success is nothing more than a few simple disciplines, practiced every day.",
      author: "Jim Rohn",
    },
    {
      text: "Don’t wish it were easier; wish you were better.",
      author: "Jim Rohn",
    },
    {
      text: "Happiness is not something you postpone for the future; it is something you design for the present.",
      author: "Jim Rohn",
    },
    {
      text: "It isn’t what you have, or who you are, or where you are, or what you are doing that makes you happy or unhappy. It is what you think about it.",
      author: "Dale Carnegie",
    },
    {
      text: "You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.",
      author: "Dale Carnegie",
    },
    {
      text: "When dealing with people, remember you are not dealing with creatures of logic, but creatures of emotion.",
      author: "Dale Carnegie",
    },
    {
      text: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
      author: "Dale Carnegie",
    },
    {
      text: "Be water, my friend. Empty your mind. Be formless, shapeless, like water.",
      author: "Bruce Lee",
    },
    {
      text: "The successful warrior is the average man, with laser-like focus.",
      author: "Bruce Lee",
    },
    {
      text: "Do not pray for an easy life; pray for the strength to endure a difficult one.",
      author: "Bruce Lee",
    },
    {
      text: "Absorb what is useful, discard what is not, add what is uniquely your own.",
      author: "Bruce Lee",
    },
    {
      text: "Knowing is not enough; we must apply. Willing is not enough; we must do.",
      author: "Bruce Lee",
    },
    {
      text: "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
      author: "Maya Angelou",
    },
    {
      text: "Nothing will work unless you do.",
      author: "Maya Angelou",
    },
    {
      text: "We may encounter many defeats but we must not be defeated.",
      author: "Maya Angelou",
    },
    {
      text: "The happiness of your life depends upon the quality of your thoughts.",
      author: "Marcus Aurelius",
    },
    {
      text: "You have power over your mind—not outside events. Realize this, and you will find strength.",
      author: "Marcus Aurelius",
    },
    {
      text: "Waste no more time arguing about what a good man should be. Be one.",
      author: "Marcus Aurelius",
    },
    {
      text: "He who has a why to live can bear almost any how.",
      author: "Viktor Frankl",
    },
    {
      text: "Between stimulus and response there is a space. In that space is our power to choose our response.",
      author: "Viktor Frankl",
    },
    {
      text: "The journey of a thousand miles begins with a single step.",
      author: "Lao Tzu",
    },
    {
      text: "Nature does not hurry, yet everything is accomplished.",
      author: "Lao Tzu",
    },
    {
      text: "Our greatest glory is not in never falling, but in rising every time we fall.",
      author: "Confucius",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "The cave you fear to enter holds the treasure you seek.",
      author: "Joseph Campbell",
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "Do not go where the path may lead; go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "No one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
      author: "Winston Churchill",
    },
    {
      text: "It always seems impossible until it’s done.",
      author: "Nelson Mandela",
    },
    {
      text: "I never lose. I either win or learn.",
      author: "Nelson Mandela",
    },
    {
      text: "Turn your wounds into wisdom.",
      author: "Oprah Winfrey",
    },
    {
      text: "The biggest adventure you can take is to live the life of your dreams.",
      author: "Oprah Winfrey",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      text: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford",
    },
    {
      text: "I have not failed. I’ve just found ten thousand ways that won’t work.",
      author: "Thomas Edison",
    },
    {
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
    },
    {
      text: "Identify your problems, but give your power and energy to solutions.",
      author: "Tony Robbins",
    },
    {
      text: "Believe you can and you’re halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
    {
      text: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe",
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      text: "The wound is the place where the Light enters you.",
      author: "Rumi",
    },
    {
      text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Strength does not come from physical capacity. It comes from an indomitable will.",
      author: "Mahatma Gandhi",
    },
    {
      text: "The best time to plant a tree was twenty years ago. The second best time is now.",
      author: "Chinese proverb",
    },
  ];

  const noteInput = document.getElementById("note");
  const foldBtn = document.getElementById("foldBtn");
  const hint = document.getElementById("hint");
  const mindEcho = document.getElementById("mindEcho");
  const mindEchoText = document.getElementById("mindEchoText");
  const starCountEl = document.getElementById("starCount");
  const starWordEl = document.getElementById("starWord");
  const vault = document.getElementById("vault");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  const quoteCard = document.querySelector(".quote-card");
  const quoteTextEl = document.getElementById("quoteText");
  const quoteAuthorEl = document.getElementById("quoteAuthor");
  const nextQuoteBtn = document.getElementById("nextQuoteBtn");

  let currentQuoteIndex = -1;

  function randomQuoteIndex(exclude) {
    if (QUOTES.length <= 1) return 0;
    let i;
    let guard = 0;
    do {
      i = Math.floor(Math.random() * QUOTES.length);
      guard += 1;
    } while (i === exclude && guard < 50);
    return i;
  }

  function applyQuote(index) {
    const q = QUOTES[index];
    quoteTextEl.textContent = q.text;
    quoteAuthorEl.textContent = q.author;
    currentQuoteIndex = index;
  }

  function showNewQuote() {
    const next = randomQuoteIndex(currentQuoteIndex);
    if (!quoteCard) {
      applyQuote(next);
      return;
    }
    quoteCard.classList.add("is-updating");
    window.setTimeout(() => {
      applyQuote(next);
      quoteCard.classList.remove("is-updating");
    }, 180);
  }

  /** @returns {{ id: string, text: string, created: number }[]} */
  function loadNotes() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  /** @param {{ id: string, text: string, created: number }[]} notes */
  function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }

  function updateCount(n) {
    starCountEl.textContent = String(n);
    starWordEl.textContent = n === 1 ? "star" : "stars";
  }

  function clearHintSoon() {
    setTimeout(() => {
      hint.textContent = "";
    }, 3200);
  }

  /** @param {string} text */
  function playMindEcho(text) {
    if (!mindEcho || !mindEchoText) return;

    mindEchoText.textContent = text;
    mindEcho.hidden = false;
    mindEcho.classList.remove("is-playing", "is-playing-reduced");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    void mindEcho.offsetWidth;

    if (reduced) {
      mindEcho.classList.add("is-playing-reduced");
      mindEcho.addEventListener(
        "animationend",
        (e) => {
          if (e.animationName !== "mind-echo-reduced") return;
          mindEcho.hidden = true;
          mindEcho.classList.remove("is-playing-reduced");
        },
        { once: true }
      );
      return;
    }

    mindEcho.classList.add("is-playing");
    mindEcho.addEventListener(
      "animationend",
      (e) => {
        if (e.animationName !== "mind-echo-cycle") return;
        mindEcho.hidden = true;
        mindEcho.classList.remove("is-playing");
      },
      { once: true }
    );
  }

  /** @param {string} id */
  function deleteStar(id) {
    const notes = loadNotes().filter((n) => n.id !== id);
    saveNotes(notes);
    refreshVault(notes);
  }

  /** @param {{ id: string, text: string, created: number }} entry */
  function renderVaultItem(entry) {
    const li = document.createElement("li");
    li.className = "vault-item";
    const wrap = document.createElement("div");
    wrap.className = "vault-item-wrap";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "vault-star";
    btn.setAttribute("aria-label", "Unfold star and read note");
    btn.innerHTML = '<div class="star-shape" aria-hidden="true"></div>';
    btn.addEventListener("click", () => openModal(entry.text));

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "vault-delete";
    delBtn.setAttribute("aria-label", "Delete this star");
    delBtn.textContent = "×";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteStar(entry.id);
    });

    wrap.appendChild(btn);
    wrap.appendChild(delBtn);
    li.appendChild(wrap);
    vault.appendChild(li);
  }

  function openModal(text) {
    modalBody.textContent = text;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    const t = e.target;
    if (t && (t.dataset && t.dataset.close !== undefined)) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /**
   * @param {{ id: string, text: string, created: number }[]} notes
   */
  function refreshVault(notes) {
    vault.innerHTML = "";
    notes.forEach(renderVaultItem);
    updateCount(notes.length);
  }

  function foldStar() {
    const text = noteInput.value.trim();
    if (!text) {
      hint.textContent = "Write a few words first—then fold.";
      clearHintSoon();
      return;
    }

    const entry = {
      id: crypto.randomUUID(),
      text,
      created: Date.now(),
    };

    const notes = loadNotes();
    notes.unshift(entry);
    saveNotes(notes);

    noteInput.value = "";
    hint.textContent = "Saved with your stars below.";
    clearHintSoon();

    showNewQuote();

    refreshVault(notes);
    playMindEcho(text);

    const echoSection = document.querySelector(".echo-section");
    if (echoSection) {
      echoSection.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  foldBtn.addEventListener("click", foldStar);

  if (nextQuoteBtn) {
    nextQuoteBtn.addEventListener("click", showNewQuote);
  }

  noteInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      foldStar();
    }
  });

  applyQuote(randomQuoteIndex(-1));
  refreshVault(loadNotes());
})();
