"use client";
import QuickActionCard from "../components/quick-action-card";
import TextInputPanel from "../components/text-input-panel";
import { quickActions } from "../data/quick-actions";

export default function DashboardView() {
  return (
    <div className="p-4">
      <div>
        <TextInputPanel />
        <div className="gap-4 my-4">
          <h2 className="text-xl mb-2">Quick Actions</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {quickActions.map((q, i) => (
              <QuickActionCard
                key={i}
                title={q.title}
                description={q.description}
                gradient={q.gradient}
                href={q.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
