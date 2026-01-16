import React from 'react';
import { Calendar, Book, MapPin, Users, Bell, TrendingUp, Shield, Zap } from 'lucide-react';

const LandingPage = ({ onLoginClick, onSignUpClick }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
            {/* Navbar */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-red-900 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-sm">M-C</span>
                            </div>
                            <div>
                                <div className="text-amber-600 text-xs font-semibold">MNNIT</div>
                                <div className="text-gray-800 text-lg font-bold -mt-1">Connect</div>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={onLoginClick}
                                className="px-6 py-2 text-amber-600 font-semibold hover:bg-amber-50 rounded-lg transition"
                            >
                                Login
                            </button>
                            <button
                                onClick={onSignUpClick}
                                className="px-6 py-2 bg-gradient-to-r from-red-700 to-red-900 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition shadow-lg"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6">
                        <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Welcome to MNNIT Connect
                        </div>

                        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                            Your Campus,<br />
                            <span className="text-4xl font-bold bg-gradient-to-r from-red-700 to-red-900 text-transparent bg-clip-text">
                                Connected.
                            </span>
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            The centralized digital hub for MNNIT Allahabad. Access academic schedules,
                            cultural and technical events, study resources, clubs, and everything you need
                            - all in one unified platform.
                        </p>

                        {/* Features List */}
                        <div className="space-y-3 pt-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-amber-600" />
                                </div>
                                <span className="text-gray-700">Unified Academic Calendar & Timetables</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <Book className="w-5 h-5 text-amber-600" />
                                </div>
                                <span className="text-gray-700">Comprehensive Study Materials Repository</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-amber-600" />
                                </div>
                                <span className="text-gray-700">Lost & Found with Direct Chat</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <Users className="w-5 h-5 text-amber-600" />
                                </div>
                                <span className="text-gray-700">All Clubs & Societies Information</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex space-x-4 pt-6">
                            <button
                                onClick={onSignUpClick}
                                className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-900 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition shadow-lg hover:shadow-xl"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={onLoginClick}
                                className="px-8 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition"
                            >
                                Login
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/mnnit2.jpeg"
                                alt="MNNIT Allahabad Campus"
                                className="w-full h-auto rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">MNNIT Allahabad</h3>
                                <p className="text-sm text-gray-200">Motilal Nehru National Institute of Technology</p>
                            </div>
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-48 left-8 right-8 bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600">50+</div>
                                <div className="text-xs text-gray-600">Events</div>
                            </div>
                            <div className="text-center border-x border-gray-200">
                                <div className="text-3xl font-bold text-amber-600">10+</div>
                                <div className="text-xs text-gray-600">Clubs</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600">500+</div>
                                <div className="text-xs text-gray-600">Resources</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MNNIT Connect?</h2>
                    <p className="text-gray-600 text-lg">Everything you need for your campus life, in one place</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-700 to-red-900 rounded-xl flex items-center justify-center mb-6">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Fast & Reliable</h3>
                        <p className="text-gray-600">
                            Get instant access to all campus information without juggling multiple sources.
                            Everything updates in real-time.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Trusted</h3>
                        <p className="text-gray-600">
                            Your data is protected with industry-standard security. Only verified MNNIT
                            students can access the platform.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                            <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Always Growing</h3>
                        <p className="text-gray-600">
                            New features and improvements added regularly based on student feedback.
                            Your suggestions matter!
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-red-700 to-red-900 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Connected?</h2>
                    <p className="text-white/90 text-lg mb-8">
                        Join thousands of MNNIT students already using the platform
                    </p>
                    <button
                        onClick={onSignUpClick}
                        className="px-10 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition shadow-xl text-lg"
                    >
                        Create Your Account
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">MC</span>
                                </div>
                                <span className="font-bold text-lg">MNNIT Connect</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Your centralized campus hub for MNNIT Allahabad
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="hover:text-white cursor-pointer">Events</div>
                                <div className="hover:text-white cursor-pointer">Academics</div>
                                <div className="hover:text-white cursor-pointer">Clubs</div>
                                <div className="hover:text-white cursor-pointer">Resources</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Support</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="hover:text-white cursor-pointer">Help Center</div>
                                <div className="hover:text-white cursor-pointer">Contact Us</div>
                                <div className="hover:text-white cursor-pointer">FAQ</div>
                                <div className="hover:text-white cursor-pointer">Feedback</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Legal</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="hover:text-white cursor-pointer">Privacy Policy</div>
                                <div className="hover:text-white cursor-pointer">Terms of Service</div>
                                <div className="hover:text-white cursor-pointer">Code of Conduct</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        © 2026 MNNIT Connect - Team BuildVerse. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;