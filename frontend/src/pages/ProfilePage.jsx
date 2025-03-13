import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base p-4">
      <div className="max-w-md w-full bg-base-200 shadow-lg rounded-lg p-6">
        <p className="text-xl text-center font-bold pb-4">
          Your Profile Details
        </p>
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full border-2 border-emerald-500">
              <img src="https://i.pravatar.cc/150?img=3" alt="Profile" />
            </div>
          </div>

          {/* User Info */}
          <p className="text-xl font-semibold mt-4">John Doe</p>
          <p className="text-gray-500 text-base lg:text-lg">
            johndoe@example.com
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Member Since: January 2024
          </p>
        </div>

        {/* Description */}
        <div className="mt-6 text-center">
          <p className="text-lg font-medium text-base-content/60">
            About Echochat
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Echochat is a modern, real-time chat application that brings people
            together with seamless messaging, group chats, and rich media
            sharing.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="btn btn-primary">Edit Profile Picture</button>
          <button className="btn btn-outline">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
