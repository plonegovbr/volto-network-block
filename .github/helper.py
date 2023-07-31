#!/usr/bin/env python
from pathlib import Path

import argparse
import json
import re


DEFAULT_VOLTO_VERSION = "16"
VOLTO_PACKAGE = "@plone/volto"


def parse_args():
    parser=argparse.ArgumentParser(description="Helper script for Volto Addon development")
    parser.add_argument("action")
    args=parser.parse_args()
    return args

def read_package_json() -> dict:
    """Read package.json from the repository root."""
    path = Path("package.json").resolve()
    if path.exists():
        return json.loads(path.read_text())
    return {}

def volto_version(package_data: dict) -> str:
    """Extract Volto version recommended in peerDependencies."""
    peer_dependencies = package_data.get("peerDependencies", {})
    raw_version = peer_dependencies.get(VOLTO_PACKAGE, DEFAULT_VOLTO_VERSION)
    version = re.search(r"(\d{1,3}\..+)$", raw_version).groups()[0]
    return version

def main():
    inputs=parse_args()
    if inputs.action == "volto_version":
        package_data = read_package_json()
        version = volto_version(package_data)
        print(version)

if __name__ == '__main__':
    main()
