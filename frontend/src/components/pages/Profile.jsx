import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { User, Mail, Calendar, Shield, LogOut,MessageCircleHeart, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/context/userContext';
import { updateCredits } from '@/utils/userHandler';

const Profile = () => {

 
  const { user, loading ,logout} = useAuth();

  const navigate = useNavigate();

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (!user) {
    return (
      <Card className="w-full max-w-md mx-auto mt-10 text-center">
        <CardContent className="pt-6">
          <p className="mb-4">Please log in to view your profile.</p>
          <Link to="/">
            <Button variant="default" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">Go to Login</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  const handleLogout = () => {
    logout();
  };

  const handleCredits = async ()=>{
    console.log('db clicked.');
    try{
      await updateCredits(10,1,'FREE10');
    }
    catch(e)
    {
      console.log("credits not updated!",e);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
      <motion.div 
        className="w-full max-w-2xl px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 rounded-t-lg">
            <button onClick={()=>navigate('/')} className='absolute left-4 top-4 text-xl hover:text-gray-400'> <ArrowLeft /> </button>            
            <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-white shadow-lg">
              <AvatarImage src={user.imageUrl} alt={user.name} />
              <AvatarFallback className="bg-blue-500 text-white text-2xl">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-blue-200 mt-2">{user.email}</p>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard icon={<User className="text-blue-600" />} title="Full Name" value={user.name} />
              <InfoCard icon={<Mail className="text-blue-600" />} title="Email" value={user.email} />
              <InfoCard icon={<Shield className="text-blue-600" />} title="Email Verified" value={user.isVerified  ? 'Yes' : 'No'} />
              <InfoCard icon={<Calendar className="text-blue-600" />} title="Created At" value={new Date(user.createdAt).toLocaleString()} />
            </div>
              <div className='text-center flex justify-center w-full'>
                <button  onDoubleClick={handleCredits}>
                 
                    <InfoCard  icon={<MessageCircleHeart className="text-blue-600" />} className='text-center' title="Credits left " value={` ${user.serviceCount}`} />
                </button>
              
              </div>
          </CardContent>
          <CardFooter className="flex justify-center p-6 bg-gray-50 rounded-b-lg">
            <Button 
              variant="destructive"
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
            >
              {/* <LogOut className="mr-2 h-4 w-4" /> */}
              Logout
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
    {icon}
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const ProfileSkeleton = () => (
  <div className="min-h-screen bg-gray-50 py-8">
    <div className="container mx-auto px-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center py-8">
          <Skeleton className="w-32 h-32 rounded-full mx-auto mb-4" />
          <Skeleton className="h-8 w-3/4 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto mt-2" />
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-20 w-full" />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center p-6">
          <Skeleton className="h-10 w-24" />
        </CardFooter>
      </Card>
    </div>
  </div>
);

export default Profile;