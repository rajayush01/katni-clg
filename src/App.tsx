


import { Routes, Route, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './components/layout/MainLayout';
// import { useState } from 'react';
import NotFound from './pages/NotFound';
// import DPSLoading from './components/ui/Loading';
import FloatingButtons from './pages/FloatingButtons';
import AllInfoPage from './pages/AllInfoPage';
import AdmissionForm from './pages/AdmissionForm';
import AboutPage from './pages/AboutPage';
//import VisionMission from './pages/VisionMission';
import Values from './pages/Values';
import ScrollToTop from './components/ui/ScrollToTop';
import Gallery from './pages/Gallery';
import ChancellorMessagePage from './components/home/Chancellormessagepage';
import ViceChancellorMessagePage from './components/home/ViceChancellormessagepage';
import AcademicCalendar from './pages/college/AcademicCalendar';
import Mission from './components/home/Mission';

//import StarSection from './components/home/StarSection';
import Stars from './pages/college/Stars';
import StudentCorner from './pages/StudentCorner';
import Bhoj from './pages/Bhoj';
import Ignou from './pages/college/Ignou';
import Reaserchcell from './pages/Reaserchcell';
import Nss from './pages/Nss';
import Sports from './pages/Sports';
import Ncc from './pages/Ncc';
import Library from './pages/Library';
import Gtcataglance from './pages/Gtcataglance';
import Staff from './pages/Staff';
import CareerGuidance from './pages/support/CareerGuidance';
import Club from './pages/support/Club';
import Hostel from './pages/support/Hostel';
import ProgrammePage from './pages/programmes/ProgrammePage';
import Antirag from './pages/committee/Antirag';
import Enterprenurship from './pages/committee/Enterprenurship';
import Grievance from './pages/committee/Grievance';
import Complaint from './pages/committee/Complaint';
import Statutory from './pages/committee/Statutory';
import Planning from './pages/committee/Planning';
import Photogallery from './pages/Photogallery';
import Mediagallery from './pages/Mediagallery';
import Videogallery from './pages/Videogallery';
import IQACPage from './pages/college/IQACpage';

const Home = lazy(() => import('./pages/Home'));
// const Legacy = lazy(() => import('./pages/Legacy'));
// const Location = lazy(() => import('./pages/Location'));
// const AboutUs = lazy(() => import('./pages/AboutUs'));
// const Academics = lazy(() => import('./pages/Academics'));
// const Admissions = lazy(() => import('./pages/Admissions'));
// const Infrastructure = lazy(() => import('./pages/Infrastructure'));
// const ContactUs = lazy(() => import('./pages/ContactUs'));
// const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
	// const [isInitialLoading, setIsInitialLoading] = useState(true);

	// const handleInitialLoadingComplete = () => {
	// 	setIsInitialLoading(false);
	// };

	// 🌀 Initial loader before full render
	// if (isInitialLoading) {
	// 	return (
	// 		<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 overflow-hidden">
	// 			<div className="scale-[2]">
	// 				<DPSLoading duration={2000} onLoadingComplete={handleInitialLoadingComplete} />
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
		<Suspense
			// fallback={
			// 	<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 overflow-hidden">
			// 		<div className="scale-[2]">
			// 			<DPSLoading />
			// 		</div>
			// 	</div>
			// }
		>
			<ScrollToTop/>
			<FloatingButtons />
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<Outlet />
						</MainLayout>
					}
				>
					<Route index element={<Home />} />
					<Route path="/all-info/:department" element={<AllInfoPage />} />
					<Route path="/admission-form" element={<AdmissionForm />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/vision-mission" element={<Mission />} />
					<Route path="/academic-calendar" element={<AcademicCalendar />} />
					<Route path="/stars" element={<Stars />} />
					<Route path="/iqac" element={<IQACPage />} />
					<Route path="/values" element={<Values />} />
					<Route path="/library" element={<Library />} />
					<Route path="/gtc-at-a-glance" element={<Gtcataglance />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/student-corner" element={<StudentCorner />} />
					<Route path="/staff" element={<Staff />} />
					<Route path="/study-center/bhoj" element={<Bhoj />} />
					<Route path="/study-center/ignou" element={<Ignou />} />
					<Route path="/gallery/photos" element={<Photogallery />} />
					<Route path="/gallery/media" element={<Mediagallery />} />
					<Route path="/gallery/videos" element={<Videogallery />} />

					<Route path="/committee/anti-ragging" element={<Antirag />} />
					<Route path="/committee/entrepreneurship" element={<Enterprenurship />} />
					<Route path="/committee/grievance" element={<Grievance />} />
					<Route path="/committee/internal-complaint" element={<Complaint />} />
					<Route path="/committee/statutory" element={<Statutory />} />
					<Route path="/committee/planning" element={<Planning />} />

					<Route path="/activity/nss" element={<Nss />} />	
					<Route path="/activity/ncc" element={<Ncc />} />
					<Route path="/activity/sports" element={<Sports />} />
					<Route path="/research" element={<Reaserchcell />} />
					<Route path="/chancellor-message" element={<ChancellorMessagePage />} />
					<Route path="/vice-chancellor-message" element={<ViceChancellorMessagePage />} />
					<Route path="/support/career-guidance" element={<CareerGuidance />} />
					<Route path="/support/club" element={<Club />} />
					<Route path="/support/hostel" element={<Hostel />} />
					{/* Programme routes */}
					<Route path="/programmes/:level/:stream/:specialization" element={<ProgrammePage />} />
					<Route path="/programmes/:level/:stream" element={<ProgrammePage />} />
					<Route path="/programmes/:level" element={<ProgrammePage />} />

				</Route>
				<Route
					path="/404"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/>
				<Route
					path="*"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/>
			</Routes>
		</Suspense>
	);
}

export default App;
