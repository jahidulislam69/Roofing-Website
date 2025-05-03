import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewProp {
    review: string;
    name: string;
  }

const ReviewCard :React.FC<ReviewProp> = ({ name, review }) => {
    return (
        <div className="w-full">
          <Card>
            <CardHeader className="flex text-yellow-400">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </CardHeader>
            <CardHeader>
              <CardDescription>
                {review} {/* Displaying review prop */}
              </CardDescription>
            </CardHeader>
            <hr className="w-[80%] mx-auto" />
            <CardContent>
              <CardTitle>{name}</CardTitle> {/* Displaying name prop */}
            </CardContent>
          </Card>
        </div>
      );
};

export default ReviewCard;
