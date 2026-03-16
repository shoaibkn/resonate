import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function QuickActionCard({
  title,
  description,
  gradient,
  href,
}: {
  title: string;
  description: string;
  gradient: string;
  href: string;
}) {
  return (
    <Card className="p-0 h-36 rounded-2xl">
      <CardContent className="flex flex-row p-2 w-full h-full border">
        <div className={cn("bg-linear-to-br w-1/3 rounded-xl p-2", gradient)}>
          <div className="w-full h-full border border-border/30 rounded-lg flex flex-row justify-center items-center">
            <div className="w-12 h-12 rounded-full bg-background/20"></div>
          </div>
        </div>
        <div className="flex flex-col w-2/3 px-4 py-2 justify-between">
          <CardHeader className="p-0">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <div>
            <Button variant="outline" size={"sm"} asChild>
              <Link href={href}>
                Try Now <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
