import type React from "react"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

interface Resource {
  title: string
  url: string
  description?: string
}

export const ResourcesSection: React.FC = () => {
  const resources = {
    "Program Domain Books": [
      {
        title: "The Pragmatic Programmer, 20th Anniversary Edition, Your Journey to Mastery",
        url: "#",
        description: "D. Thomas and A. Hunt. Boston: Addison-Wesley, 2019.",
      },
    ],
    "Reference Articles": [
      {
        title: "Challenges and solutions when adopting DevSecOps: A systematic review",
        url: "https://doi.org/10.1016/j.infsof.2021.106700",
        description:
          "R. N. Rajapakse, M. Zahedi, M. A. Babar, and H. Shen. Information and Software Technology, vol. 141, p. 106700, Jan. 2022.",
      },
      {
        title:
          "Software security patch management - A systematic literature review of challenges, approaches, tools and practices",
        url: "https://doi.org/10.1016/j.infsof.2021.106771",
        description:
          "N. Dissanayake, A. Jayatilaka, M. Zahedi, and M. A. Babar. Information and Software Technology, vol. 144, p. 106771, Apr. 2022.",
      },
      {
        title: "Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology",
        url: "https://doi.org/10.6028/NIST.SP.800-40r4-draft",
        description: "M. Souppaya and K. Scarfone. National Institute of Standards and Technology, Nov. 2021.",
      },
    ],
    "Additional Resources": [
      {
        title: "Idiomatic Go",
        url: "https://dmitri.shuralyov.com/idiomatic-go",
        description: "D. Shuralyov",
      },
      {
        title: "Velociraptor - Digging deeper!",
        url: "https://docs.velociraptor.app/",
        description: "Welcome documentation",
      },
      {
        title: "Trivy - Vulnerability",
        url: "https://aquasecurity.github.io/trivy/v0.59/docs/scanner/vulnerability/",
        description: "aquasecurity",
      },
      {
        title: "shadcn/ui Documentation",
        url: "https://ui.shadcn.com/docs",
        description: "shadcn",
      },
    ],
  }

  return (
    <Box component="section" sx={{ mb: 4, textAlign: "center", width: "100%" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Project Resources
      </Typography>
      {Object.entries(resources).map(([category, items], index) => (
        <Accordion key={index} sx={{ width: "100%", mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6">{category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {items.map((resource: Resource, itemIndex: number) => (
              <Box key={itemIndex} sx={{ mb: 2, textAlign: "left" }}>
                <Typography variant="subtitle1">
                  <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                    {resource.title}
                  </Link>
                </Typography>
                {resource.description && (
                  <Typography variant="body2" color="text.secondary">
                    {resource.description}
                  </Typography>
                )}
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}


