import extractRootDomain from './extractRootDomain';

function extractSecondLevelName(url) {
    let rootDomain = extractRootDomain(url);

    return rootDomain.split('.')[0];
}

export default extractSecondLevelName;