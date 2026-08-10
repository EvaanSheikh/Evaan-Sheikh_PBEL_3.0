"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Bell,
  Plus,
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function TopNavbar() {
  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();

    if (!query) {
      return;
    }

    window.location.href = `/candidates?search=${encodeURIComponent(query)}`;
  }

  return (
    <header className="relative z-50 flex h-[92px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-9">

      {/* Left */}

      <div className="flex items-center gap-8">

        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <form onSubmit={handleSearch}>

          <div className="flex h-[52px] w-[480px] items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm">

            <Search
              size={21}
              className="shrink-0 text-slate-400"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search candidates..."
              className="ml-3 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />

          </div>

        </form>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Notifications */}

        <div className="relative">

          <button
            type="button"
            aria-label="Notifications"
            onClick={() => {
              setNotificationsOpen((value) => !value);
              setProfileOpen(false);
            }}
            className="relative flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:bg-slate-50"
          >

            <Bell
              size={21}
              className="text-slate-700"
            />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />

          </button>

          {notificationsOpen && (
            <div className="absolute right-0 top-[60px] w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">

              <div className="flex items-center justify-between border-b border-slate-200 pb-3">

                <h3 className="font-semibold text-slate-900">
                  Notifications
                </h3>

                <span className="text-xs text-slate-400">
                  3 new
                </span>

              </div>

              <div className="space-y-2 pt-3">

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-sm font-medium text-slate-900">
                    New candidate added
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Sarah Parker applied for Backend Engineer.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-sm font-medium text-slate-900">
                    Interview reminder
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    John Anderson has an interview at 10:30 AM.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-sm font-medium text-slate-900">
                    Strong candidate match
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    A new candidate scored above 90 ATS.
                  </p>
                </div>

                <Link
                  href="/notifications"
                  onClick={() => setNotificationsOpen(false)}
                  className="block pt-2 text-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View all notifications
                </Link>

              </div>

            </div>
          )}

        </div>

        {/* Add Job */}

        <Link
          href="/jobs/new"
          className="flex h-[52px] items-center gap-2 rounded-2xl bg-blue-600 px-6 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Job
        </Link>

        {/* Profile */}

        <div className="relative">

          <button
            type="button"
            aria-label="Open profile menu"
            onClick={() => {
              setProfileOpen((value) => !value);
              setNotificationsOpen(false);
            }}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
          >
            ES
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-[60px] w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">

              <div className="border-b border-slate-100 px-3 py-3">

                <p className="font-semibold text-slate-900">
                  Evaan Sheikh
                </p>

                <p className="text-xs text-slate-500">
                  Recruiter
                </p>

              </div>

              <Link
                href="/profile"
                onClick={() => setProfileOpen(false)}
                className="mt-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
              >
                <User size={17} />
                Profile
              </Link>

              <Link
                href="/settings"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
              >
                <Settings size={17} />
                Settings
              </Link>

              <button
                type="button"
                onClick={() => {
                  setProfileOpen(false);
                  alert("Authentication will be connected when the backend is added.");
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
              >
                <LogOut size={17} />
                Logout
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}