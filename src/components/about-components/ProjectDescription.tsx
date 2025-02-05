import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const ProjectDescription: React.FC = () => {
  return (
    <Box component="section" sx={{ mb: 4, textAlign: 'center', spaceBetween: 1 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Project Description
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Syntinel Nyx is an IT management suite that streamlines vulnerability, patch, and asset management for medium to large-sized organizations. Nyx's main purpose is to provide a robust yet intuitive interface for IT personnel to quickly update and deploy patches safely across different environments. This not only ensures the availability of the systems in an organization, but also speeds up the time needed for an organization to secure multiple machines from vulnerabilities, helping to further support an organization's security posture.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        One of the biggest challenges for organizations is striking a balance between security and availability. Despite vulnerability patches being released consistently for organizations to apply to the corporate environment, outdated and unpatched systems are still prevalent within companies. Oftentimes, these security patches can result in the infrastructure of an organization no longer being operational if improperly implemented. As such, testing these security patches is vital to decrease the likelihood of the organizational uptime being negatively impacted. Finding the right balance between applying security patches quickly and allowing sufficient time for testing is a complex challenge for organizations to address.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        There are various cybersecurity solutions currently that help to address these problems. However, these are often separate and distinct applications that can be incredibly costly. Therefore, an application is needed that connects non-invasive deployment with effective and efficient patching in a cost-effective manner. It is a necessity for the application to be responsive and robust enough to allow personnel to quickly apply security patches across multiple systems in a corporate environment, while being intuitive enough to reduce the chances of mistakes. Not only that, the application should be extensible enough to allow different security solutions to be utilized and safe enough to ensure changes made by the system are reversible and not irreparable.
      </Typography>
      <Typography variant="body1">
        Syntinel Nyx seeks to address these problems and meet the needs of medium to large organizations for a centralized IT management solution. Nyx enables efficient and safe deployment of patches, minimizing the attack surface of an organization without disrupting critical operations. Ensuring flexibility and extensibility is also a core tenet of Nyx, as companies need to be able to customize the tool to fit their organizational requirements. Ultimately, Syntinel Nyx is a powerful management suite that allows IT personnel to enhance the security posture of their organization.
      </Typography>
    </Box >
  );
};


