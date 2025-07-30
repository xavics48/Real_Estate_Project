import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function PropertyCard({ property, currency }) {
    const coverPhoto = property.media?.cover_photo || "/placeholder.jpg";

    // Top-left: Payment plan OR category
    const paymentPlan = property.payment_plans?.[0]
        ? `${property.payment_plans[0].down_payment_percent || 0}/${property.payment_plans[0].handover_percent || 0} PAYMENT PLAN`
        : null;
    const category = property.type?.sub || "Property";

    // Top-right: Status badge (always visible)
    const status = property.sale_type === "new"
        ? "New Launch"
        : property.purpose === "for-sale"
            ? "Off-Plan"
            : "For Sale";

    // Currency conversion (dummy for now, replace with API if needed)
    const price = currency === "EUR"
        ? Math.round((property.price || 0) * 0.25)
        : property.price;

    return (
        
        <div
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition transform hover:-translate-y-1"
            dir="ltr"
        >
            <Link href={`/ui/project_details/${property.id}`}>
            {/* Image */}
            <div className="relative">
                <img
                    src={coverPhoto}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                />
                {/* Left badge */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                    {paymentPlan || category}
                </span>
                {/* Right badge */}
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                    {status}
                </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                {/* Price */}
                <p className="text-blue-600 font-bold text-lg mb-2">
                    from {currency} {price?.toLocaleString()}
                </p>

                {/* Title */}
                <h3 className="text-gray-800 font-semibold text-lg mb-1 line-clamp-2">
                    {property.title}
                </h3>

                {/* Location */}
                <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {property.location?.community?.name || "Dubai"}
                </p>

                {/* Developer + Handover */}
                <div className="text-sm text-gray-600 space-y-1 mb-5">
                    <p>
                        <span className="font-medium">Developer:</span>{" "}
                        {property.agency?.name || "N/A"}
                    </p>
                    <p>
                        <span className="font-medium">Handover:</span>{" "}
                        {property.details?.completion_details?.completion_date
                            ? new Date(property.details.completion_details.completion_date).toLocaleDateString("en-US", { month: "short", year: "numeric" })
                            : "TBA"}
                    </p>
                </div>

                {/* Discover more button */}
                <Button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    Discover more
                </Button>
                </div>
            </Link>
        </div>
    );
}
