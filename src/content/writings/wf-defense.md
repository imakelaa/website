# Defending Website Fingerprinting Attacks using Adversarial ML

Tor hides which websites you visit, but the *shape* of your traffic can still give you away. We tested how well modern deep-learning attacks can guess the site from encrypted Tor traffic, and how much an adversarial defense can push back.

## Problem

Tor is widely used for anonymous browsing, yet the timing and direction of its packets still leak patterns. Website Fingerprinting (WF) attacks learn those patterns: an attacker who can watch the link between you and Tor's entry guard records your traffic and asks a classifier, "which site does this look like?"

![Tor circuit: user → entry guard → middle relay → exit node, with an attacker watching the first hop](tor-diagram.png)

Deep-learning classifiers like DF, AWF and Var-CNN reach 95–98% accuracy on closed-world data. Older defenses such as WTF-PAD and Walkie-Talkie rely on padding and hand-crafted rules, and they don't hold up as attacks get smarter. Newer defenses such as Mockingbird and Universal Adversarial Perturbations (UAP) take a different approach: they nudge traces just enough to fool the classifier, at a reasonable bandwidth cost.

## Setup

We didn't build these models from scratch: we studied, evaluated and adapted attacks and defenses developed by other researchers.

- **Attacks:** DF, AWF and Var-CNN, from the [Website Fingerprinting Library](https://github.com/FIND-Lab/Website-Fingerprinting-Library) (Tor-focused).
- **Defenses:** WTF-PAD, and an adapted version of Mockingbird.
- **Data:** an 8 GB Tor trace dataset, evaluated closed-world.
- **Mockingbird settings:** α = 0.05, 180 iterations, 12 targets, k-means = 4.

We looked at why CNNs do so well on undefended traffic (residual directional bursts), what adversarial trace generation does to them, and how accuracy drops at different bandwidth-overhead budgets.

## Findings

- **Undefended, the attacks are near-perfect.** DF and Var-CNN reach about 98% top-1 accuracy on our large, clean closed-world test split, consistent with prior work.
- **Mockingbird cuts that roughly in half.** With moderate settings, DF's top-1 accuracy drops to 45–60% depending on caps, with median bandwidth overhead in the 20–60% range.
- **Stronger perturbations cost more bandwidth.** Removing per-step caps and raising α or iterations lowers attacker accuracy further, but can push median overhead past 60%. How far you can go depends on the deployment's budget.
- **Attackers adapt.** Retraining on defended traces recovers much of the accuracy: DF can climb back from 45% to 80%.

## Takeaways

Adversarial defenses work, but they aren't a one-time fix. Every defense shifts the attacker's training data, and a retrained attacker claws back much of what was lost. It's an arms race, and the real question is how much bandwidth overhead users are willing to pay to stay ahead.
