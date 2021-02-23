# Exercise 5.04: Platform comparison

## Comparison Chart between Openshift and Rancher [[1]](https://https://www.kloia.com/blog/openshift-vs-rancher)

|                                 | OPENSHIFT | RANCHER |
|---|---|---|
| Installation easiness           | Installation is reported that it takes from 3 days to weeks, mostly reported takes more than a week | Installation between 20 minutes to 2 hours |
| CNCF/Industry Standards   | Although RedHat contributes to the Kubernetes project, Openshift is reported to favor its own non-CNCF tools&practices during OpenShift onboarding | Follows and extends industry standards |
| Open Source                     | Community version is Open Source but Enterprise version is not | %100 Open Source |
| Licensing                       | vCPU based licensing makes it expensive for nodes having high number of vCPUs | Number of nodes are counted, number of vCPUs are not counted |
| Multi-Cluster                   | Recently included to the platform  | Stable for many years |
| Upgrades                        | Failed version upgrades and rollbacks are reported. Several disruptions after upgrades are reported. | Version upgrades are smooth. Zero-downtime version upgrades |
| Kubernetes Version              | Usually follows 3 version back. (OCP 4.2 is based on Kubernetes 1.14) | Follows max. one version back. (Rancher 2.3 support Kubernetes 1.16, 1.17Beta) |
| Vendor-lock                     | Once installed, switching to vanilla Kubernetes is not possible | Rancher Management and Kubernetes are decoupled, switching to vanilla Kubernetes is possible |
| Windows Container Support   | Vendor reported that even 4.3 version will not include Windows container support | Windows 2019 container support is GA is 2.3 version with a subset of cluster features |
| Support                         | Support to the platform is provided | Supports not only the platform but also the tools in Kubernetes ecosystem |
| Sales                           | Noticeable sales power and marketing influence | Limited sales and marketing |
| Partner ecosystem               | IBM partners worldwide are OCP partners | Limited partner channel |
| Bundle options                  | Bundled into IBM deals which makes it attractive from a cost point of view | Vendor agnostic approach |

## Choose on Rancher

* Fast Installation
* No Vendor-lock
* Zero downtime when upgrade
* 100% Open Source