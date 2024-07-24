import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const ExpertCard = ({ expert }) => {
  const image = expert.media[0].original_url;
  const initials = expert.name
    .split(' ')
    .map(name => name[0])
    .join('');
  return (
    <Card className="bg-[rgba(0,0,0,0.4)] border-none">
      <CardContent className="w-full h-48 flex flex-col gap-4 justify-between items-center p-3">
        <Avatar className="w-16 h-16">
          <AvatarImage src={image} alt={expert.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="text-xs font-normal text-gray-200 ">
          <p className="font-semibold">{expert.name}</p>
          <p>{expert.designation}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpertCard;
