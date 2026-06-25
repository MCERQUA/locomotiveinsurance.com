export const SITE = {
  name: "Locomotive Insurance",
  domain: "locomotiveinsurance.com",
  url: "https://locomotiveinsurance.com",
  tagline: "Insurance for Heritage & Short-Line Railroads",
  description: "Specialized insurance for tourist and heritage railroad operators and short lines — excursion railroads, railroad museums, dinner trains, short-line freight, and locomotive restoration shops. General liability, railroad liability and FELA, passenger liability, rolling stock, commercial property, pollution liability, and workers comp. Licensed in all 50 states. Same-day quotes.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  statesLicensed: "All 50 states",
} as const;

export const SERVICES = [
  {
    slug: "general-liability-insurance",
    title: "General Liability Insurance",
    short: "Covers third-party bodily injury and property damage across your railroad, depot, and grounds — the foundation of operator coverage.",
    icon: "Shield",
    description:
      "General liability is the foundation of railroad operator coverage. It protects against third-party claims of bodily injury or property damage arising from your premises, depots, and public operations.",
    longDescription: `## General Liability for Heritage & Short-Line Railroads

A tourist railroad, museum, or short line is a public-facing operation: visitors walk the depot and grounds, board equipment, and tour shops and yards. A guest who trips on a platform, a visitor injured at a crossing, or property damage to an adjacent owner all create third-party liability that general liability is built to address.

## What GL Covers

- **Bodily injury:** Third-party injuries on your depot, platform, grounds, and at events
- **Property damage:** Damage your operation causes to neighboring or host-railroad property
- **Premises liability:** Slips, trips, and falls around stations, museums, and yards
- **Products and concessions:** Food service, gift shops, and vendor exposure
- **Medical payments:** Minor on-site injuries handled without a lawsuit

## Why Railroad GL Is Specialized

Standard business carriers exclude railroad operations almost universally — the track, grade-crossing, passenger, and equipment exposures are well outside an ordinary commercial policy. Heritage and short-line coverage must be placed with specialty railroad markets that understand FRA-regulated operations. That is exactly where we work.

## Host Railroads, Municipalities, and Certificates

Railroads that operate over host-railroad track, lease right-of-way, or run through municipalities are routinely required to carry general liability with the host or municipality named as additional insured — often at high limits. We issue certificates and additional insured endorsements same-day.`,
    coverages: [
      "Third-party bodily injury",
      "Property damage liability",
      "Premises slip-and-fall",
      "Concessions & gift shop",
      "Medical payments",
      "Additional insured endorsements",
    ],
    faqs: [
      {
        q: "What general liability limits does a tourist railroad need?",
        a: "$1M per occurrence / $2M aggregate is a common baseline, but host railroads, municipalities, and lessors frequently require higher limits — often $5M or more, layered with railroad liability and excess. We structure limits to your operating agreements.",
      },
      {
        q: "Why won't a standard business insurer cover my railroad?",
        a: "Railroad operations carry track, crossing, passenger, and rolling-stock exposures that standard carriers exclude. Heritage and short-line coverage is placed through specialty railroad markets — the market we specialize in.",
      },
    ],
  },
  {
    slug: "railroad-liability-insurance",
    title: "Railroad Liability Insurance",
    short: "Specialized liability for railroad operations — track, crossings, host-railroad agreements, and FELA worker-injury exposure.",
    icon: "TrainTrack",
    description:
      "Railroad liability is the core specialty coverage for an operating railroad, addressing the exposures unique to running trains — grade crossings, right-of-way, host-railroad indemnity, and FELA worker-injury claims.",
    longDescription: `## Railroad Liability for Operating Railroads

Running a railroad creates exposures that ordinary liability never contemplates: grade crossings, trespassers on the right-of-way, derailments, and the contractual indemnity demanded by host railroads and track owners. Railroad liability is the specialty coverage built for these risks.

## What Railroad Liability Addresses

- **Grade-crossing accidents** involving vehicles and pedestrians
- **Right-of-way and trespasser** exposure along the line
- **Derailment liability** and damage to others' property
- **Host-railroad contractual liability:** The broad indemnity agreements track owners require
- **Operating exposures** that standard GL excludes

## FELA — The Railroad Worker Injury Law

Railroad workers are generally NOT covered by state workers compensation. Instead, the **Federal Employers Liability Act (FELA)** governs railroad worker injuries — a fault-based system where an injured employee sues the railroad for negligence. FELA claims can far exceed typical workers comp benefits, which makes FELA liability coverage essential for any railroad with paid operating crews.

## Why It Pairs With General Liability

General liability handles the depot and visitor exposures; railroad liability handles the train, track, crossing, and FELA exposures. An operating railroad needs both, and we coordinate the program so there are no gaps between the platform and the main line.`,
    coverages: [
      "Grade-crossing liability",
      "Right-of-way & trespasser",
      "Derailment liability",
      "Host-railroad contractual indemnity",
      "FELA worker-injury liability",
      "Excess / high-limit options",
    ],
    faqs: [
      {
        q: "What is FELA and why does it matter for my railroad?",
        a: "The Federal Employers Liability Act governs railroad worker injuries instead of state workers comp. Injured railroaders sue the railroad for negligence, and awards can far exceed comp benefits. Any railroad with paid operating crews needs FELA liability coverage.",
      },
      {
        q: "Why do host railroads require so much coverage?",
        a: "Track owners and host railroads require operators to carry high liability limits and to indemnify them broadly, because an incident on their track can be catastrophic. Railroad liability is structured to meet those contractual requirements.",
      },
    ],
  },
  {
    slug: "passenger-liability-insurance",
    title: "Passenger Liability Insurance",
    short: "Protects your operation against injury claims from the excursion riders and dinner-train guests you carry.",
    icon: "Users",
    description:
      "Passenger liability covers claims brought by the riders you carry — excursion passengers, dinner-train guests, and tour groups — injured while boarding, riding, or detraining your equipment.",
    longDescription: `## Passenger Liability for Excursion & Dinner Trains

The moment you carry paying passengers, you take on a heightened duty of care toward them. Boarding and detraining, moving between cars, open-window and platform exposure, and onboard food service all create passenger injury risk that is distinct from general premises liability.

## What Passenger Liability Covers

- **Boarding and detraining injuries** at platforms and steps
- **Onboard injuries** while riding, moving between cars, or at open windows
- **Dinner-train and food-service** related injuries
- **Tour group and event** passenger exposure
- **Legal defense costs** for passenger claims

## A Higher Standard of Care

As a common carrier of passengers, a railroad is generally held to a high standard of care for the safety of the people it carries. That elevated duty makes passenger claims serious, and adequate limits essential — particularly for operations carrying large excursion crowds or hosting events.

## Built Into Your Railroad Program

Passenger liability works alongside general and railroad liability to cover the full span of your operation, from the depot to the moving train. We make sure passenger exposure is explicitly addressed and properly limited for the volume of riders you carry.`,
    coverages: [
      "Boarding & detraining injury",
      "Onboard passenger injury",
      "Dinner-train & food service",
      "Tour group & event riders",
      "Common-carrier exposure",
      "Legal defense costs",
    ],
    faqs: [
      {
        q: "Isn't passenger injury covered by general liability?",
        a: "Passenger exposure should be explicitly addressed and adequately limited because, as a carrier of passengers, your railroad is held to a high standard of care. We make sure passenger liability is built into your program rather than left as a gap.",
      },
      {
        q: "Do dinner trains have extra exposure?",
        a: "Yes. Food service aboard a moving train adds slip, burn, and foodborne-illness exposure on top of normal passenger risk. We structure coverage to include the dining operation alongside the passenger-carrying exposure.",
      },
    ],
  },
  {
    slug: "rolling-stock-equipment-insurance",
    title: "Rolling Stock & Equipment Insurance",
    short: "Covers your locomotives, coaches, cars, and restoration projects — irreplaceable equipment against fire, derailment, and damage.",
    icon: "TrainFront",
    description:
      "Rolling stock coverage protects the equipment at the heart of your railroad — locomotives, passenger coaches, freight cars, and restoration projects — against fire, derailment, vandalism, and physical damage.",
    longDescription: `## Rolling Stock & Equipment Coverage

A heritage railroad's equipment is often historic, irreplaceable, and enormously valuable — a restored steam locomotive or a vintage coach can represent years of work and money that cannot simply be repurchased. Rolling stock coverage protects locomotives, coaches, freight cars, and works in progress against physical loss.

## What's Covered

- **Locomotives:** Steam, diesel, and electric motive power
- **Passenger coaches and cars:** Excursion and dinner-train equipment
- **Freight and maintenance-of-way equipment**
- **Restoration projects:** Equipment under restoration in your shop
- **Perils:** Fire, derailment, collision, vandalism, and storm damage

## Valuing Irreplaceable Equipment

Because much heritage equipment cannot be replaced at any market price, how it is valued on the policy is critical. Agreed-value coverage, stated amounts, and restoration-cost considerations all matter. We work with specialty markets that understand historic rolling stock and value it appropriately rather than applying ordinary depreciation.

## Equipment in the Shop and on Loan

Restoration shops handle equipment they don't own, and museums frequently borrow and lend equipment. We make sure coverage follows your equipment — including pieces in your shop or on loan — so a fire or accident doesn't fall through a gap.`,
    coverages: [
      "Locomotives (steam & diesel)",
      "Passenger coaches & cars",
      "Freight & MOW equipment",
      "Restoration projects",
      "Agreed / stated value",
      "Fire, derailment & vandalism",
    ],
    faqs: [
      {
        q: "How is irreplaceable historic equipment valued?",
        a: "Through agreed-value or stated-amount coverage with markets that understand heritage rolling stock. Rather than applying ordinary depreciation, we document restoration cost and historic value so a covered loss is settled fairly.",
      },
      {
        q: "Is equipment under restoration in my shop covered?",
        a: "Yes — rolling stock coverage can extend to equipment under restoration, including pieces you don't own or that are on loan. We make sure coverage follows the equipment so a shop fire or accident is protected.",
      },
    ],
  },
  {
    slug: "commercial-property-insurance",
    title: "Commercial Property Insurance",
    short: "Protects your depots, museums, shops, track structures, and contents against fire, storm, and theft.",
    icon: "Building2",
    description:
      "Commercial property covers the fixed assets of your railroad — depots, museum buildings, restoration shops, station structures, and contents — against fire, storm, theft, and other covered perils.",
    longDescription: `## Commercial Property for Railroad Operations

A railroad operation is anchored by real property: historic depots, museum buildings, engine houses, restoration shops, and station structures, plus the tools, displays, archives, and contents inside them. Commercial property insurance protects those fixed assets against fire, windstorm, theft, vandalism, and other covered perils.

## What Property Coverage Protects

- **Depots and station buildings:** Often historic and architecturally significant
- **Museum buildings and displays:** Structures, exhibits, and archives
- **Engine houses and restoration shops:** Buildings, machinery, and tools
- **Track-side structures:** Towers, water tanks, and signal structures
- **Contents:** Tools, parts inventory, records, and fixtures

## Historic Structures Need Special Handling

Many railroad buildings are historic, and rebuilding them to original specifications can cost far more than a standard replacement. We work with markets that understand historic structures so your depot or museum is insured for what restoration would actually cost, not a generic replacement figure.

## Business Interruption

A fire or storm that closes your depot or shops can halt excursions and revenue while fixed costs continue. Business interruption coverage replaces lost income and extra expense during the rebuild — important for operations whose season and revenue depend on the facility.`,
    coverages: [
      "Depots & station buildings",
      "Museum buildings & displays",
      "Engine houses & shops",
      "Track-side structures",
      "Tools, parts & contents",
      "Business interruption",
    ],
    faqs: [
      {
        q: "My depot is a historic building — is it covered for restoration cost?",
        a: "It can be. We place property coverage with markets that understand historic structures, so a covered loss is valued at what restoring the building to original specification would cost rather than a generic replacement figure.",
      },
      {
        q: "Does property coverage include lost revenue if we have to close?",
        a: "With business interruption coverage, yes. If a covered loss closes your depot or shops, it replaces lost excursion and event income and covers extra expense while you rebuild — important for a seasonal operation.",
      },
    ],
  },
  {
    slug: "pollution-liability-insurance",
    title: "Pollution Liability Insurance",
    short: "Covers environmental claims and cleanup from diesel fuel, oil, lubricants, and other railroad contaminants.",
    icon: "Droplet",
    description:
      "Pollution liability covers the environmental exposures inherent to railroading — diesel fuel and oil spills, lubricant releases, and contamination — including third-party claims and the cost of cleanup.",
    longDescription: `## Pollution Liability for Railroads

Railroads handle fuel, oil, grease, solvents, and other contaminants every day — fueling locomotives, servicing equipment, and maintaining track. A fuel spill, a leaking tank, or historic contamination on railroad land can trigger costly cleanup obligations and third-party claims, and most general liability policies exclude pollution.

## What Pollution Liability Covers

- **Sudden and accidental releases:** Diesel, oil, and lubricant spills
- **Cleanup costs:** Remediation of contaminated soil and water
- **Third-party bodily injury and property damage** from a release
- **Gradual pollution conditions**, depending on the policy form
- **Legal defense** for environmental claims

## Why GL Won't Respond

Modern general liability policies contain broad pollution exclusions. For a railroad that stores and dispenses diesel fuel and handles oils and solvents, that exclusion is a serious gap. Dedicated pollution liability closes it.

## Yards, Shops, and Historic Sites

Fueling areas, engine houses, and shops are the highest-risk locations, and many heritage railroads operate on land with a long industrial history. We help you address both ongoing operational pollution risk and the conditions that come with historic railroad property.`,
    coverages: [
      "Diesel & oil spill cleanup",
      "Soil & water remediation",
      "Third-party pollution claims",
      "Sudden & accidental release",
      "Gradual pollution options",
      "Environmental legal defense",
    ],
    faqs: [
      {
        q: "Doesn't my general liability cover a fuel spill?",
        a: "Almost never. Modern GL policies contain broad pollution exclusions. For a railroad fueling locomotives and handling oils and solvents, dedicated pollution liability is essential to cover spill cleanup and environmental claims.",
      },
      {
        q: "We operate on old industrial land — is historic contamination an issue?",
        a: "It can be. Many heritage railroads sit on land with a long industrial history, where pre-existing contamination is a real exposure. We help structure pollution coverage to address both operational releases and historic-site conditions.",
      },
    ],
  },
  {
    slug: "workers-compensation-insurance",
    title: "Workers Compensation Insurance",
    short: "Coverage for non-railroad staff and volunteers — gift shop, food service, and grounds — alongside FELA for operating crews.",
    icon: "HardHat",
    description:
      "Workers comp covers your non-operating employees — gift shop, food service, museum, and grounds staff — while operating railroad crews are covered for injury under FELA. We coordinate both so every worker is protected.",
    longDescription: `## Workers Comp (and FELA) for Railroad Operations

Railroad employment is unusual: operating railroad crews are generally covered under the federal **FELA** system rather than state workers compensation, while your non-railroad employees — gift shop clerks, food-service staff, museum and grounds workers, and office employees — are typically covered by ordinary workers comp. Most heritage operations need both, properly coordinated.

## Who Workers Comp Covers

- **Gift shop and ticketing staff**
- **Food-service and hospitality employees**
- **Museum, grounds, and maintenance staff** (non-operating)
- **Administrative and office employees**

## FELA vs. Workers Comp — Getting It Right

Misclassifying who falls under FELA versus workers comp is a costly mistake. Operating crews exposed to train movement are generally FELA; many support staff are workers comp. We help you classify roles correctly so the right coverage responds and you aren't left with an uncovered injury or an unexpected audit.

## Volunteers — A Heritage Railroad Reality

Museums and tourist railroads run largely on volunteers, who often fall outside both workers comp and clear FELA coverage. We help you understand volunteer exposure and arrange volunteer accident or participant coverage so an injured volunteer isn't left unprotected.

## Controlling Your Premium

- Classify operating vs. non-operating roles correctly
- Document a written safety program and training
- Return injured staff to light duty quickly
- Keep a clean claims history to lower your experience modifier`,
    coverages: [
      "Non-operating staff coverage",
      "Gift shop & food service",
      "Museum & grounds staff",
      "Employer's liability",
      "FELA coordination",
      "Volunteer accident options",
    ],
    faqs: [
      {
        q: "Do my railroad crews get workers comp or FELA?",
        a: "Operating crews exposed to train movement generally fall under FELA, not state workers comp, while non-operating staff (shop, food service, grounds, office) are typically workers comp. We help classify each role so the correct coverage responds.",
      },
      {
        q: "Are our volunteers covered?",
        a: "Volunteers often fall outside both workers comp and clear FELA coverage. Because heritage railroads rely heavily on volunteers, we arrange volunteer accident or participant coverage so an injured volunteer isn't left unprotected.",
      },
    ],
  },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years in Specialty Insurance" },
  { value: 50, suffix: " States", label: "Licensed Nationwide" },
  { value: 1000, suffix: "+", label: "Specialty Risks Quoted" },
  { value: 24, suffix: " Hours", label: "Quote Turnaround" },
] as const;

export const FAQS = [
  {
    q: "What insurance does a tourist or heritage railroad need?",
    a: "At minimum: general liability and railroad liability (including FELA for operating crews). Most operators also need passenger liability for excursion and dinner-train riders, rolling stock coverage for locomotives and cars, commercial property for depots and shops, pollution liability for fuel and oil, and workers comp for non-operating staff.",
  },
  {
    q: "Why can't I just use a regular business insurance company?",
    a: "Railroads carry track, grade-crossing, passenger, FELA, and rolling-stock exposures that standard carriers exclude entirely. Heritage and short-line coverage has to be placed through specialty railroad markets — exactly the market we work in every day.",
  },
  {
    q: "What is FELA and how is it different from workers comp?",
    a: "The Federal Employers Liability Act governs railroad worker injuries instead of state workers comp. It is fault-based — injured railroaders sue the railroad for negligence — and awards can far exceed comp benefits. Operating crews are generally FELA; non-operating staff are usually workers comp.",
  },
  {
    q: "Do host railroads and municipalities require proof of insurance?",
    a: "Almost always. Operating over host-railroad track or through municipalities typically requires high liability limits with the host or municipality named as additional insured. We issue certificates and additional insured endorsements same-day.",
  },
  {
    q: "Can you insure our historic locomotives and rolling stock?",
    a: "Yes. We place rolling stock coverage on agreed-value or stated-amount terms with markets that understand irreplaceable heritage equipment — including pieces under restoration in your shop or on loan.",
  },
  {
    q: "How much does heritage railroad insurance cost?",
    a: "It varies widely by operation type, passenger volume, track miles, equipment value, and whether you operate over host track. A small museum pays far less than a large excursion railroad carrying thousands of passengers. The best way to know is a quote.",
  },
] as const;

export const CREDENTIALS = [
  "Licensed in All 50 States",
  "NPN #8608479",
  "Founded 2005",
  "A.M. Best A+ Rated Carriers",
  "Railroad Insurance Specialists",
  "Same-Day Certificates",
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
