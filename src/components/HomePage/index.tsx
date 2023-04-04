import RepairService from "@component/pages/repair-services"
import { BrandsList } from "./brandsList"
import { HomePageBanner } from "./homePageBanner"
import { WorkingSteps } from "./workingSteps"

export const HomePageComponent = () => {
    return (
        <>
        <HomePageBanner />
        <RepairService/>
        <WorkingSteps/>
        <BrandsList/>
        </>
    )
}