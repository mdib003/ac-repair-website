import { BrandsList } from "./brandsList"
import { HomePageBanner } from "./homePageBanner"
import { WorkingSteps } from "./workingSteps"

export const HomePageComponent = () => {
    return (
        <>
        <HomePageBanner />
        <WorkingSteps/>
        <BrandsList/>
        </>
    )
}