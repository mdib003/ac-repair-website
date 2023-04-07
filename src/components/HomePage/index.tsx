
import { BrandsList } from "./brandsList"
import { HomePageBanner } from "./homePageBanner"
import { WorkingSteps } from "./workingSteps";
import { OurServices } from "./ourServices"

export const HomePageComponent = () => {
    return (
        <>
        <HomePageBanner />
        <OurServices/>
        <WorkingSteps/>
        <BrandsList/>
        </>
    )
}