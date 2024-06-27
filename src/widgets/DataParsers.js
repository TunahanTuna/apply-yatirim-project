const SectorRatioParser = (data) => {
    return (
        data &&
        data.filter(
            (data, index) =>
                index == 0 || index == 2 || index == 24 || index == 28 || index == 29 || index == 33 || index == 34
        )
    )
}

export { SectorRatioParser }
