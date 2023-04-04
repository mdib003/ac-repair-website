
import { BrandsList } from "./brandsList"
import { HomePageBanner } from "./homePageBanner"
import { WorkingSteps } from "./workingSteps";
import { RepairServices } from "./repairServices"

export const HomePageComponent = () => {
    return (
        <>
        <HomePageBanner />
        <RepairServices/>
        <WorkingSteps/>
        <BrandsList/>
        </>
    )
}