export const processActiveCompanies = (traders: string[]) => {
    const traderCount = {};
    const totalTraders = traders.length;
    const threshold = Math.ceil(totalTraders * 0.08);

    // Hitung jumlah pedagang untuk setiap perusahaan
    traders.forEach(company => {
        traderCount[company] = (traderCount[company] || 0) + 1;
    });

    // Filter perusahaan yang memenuhi syarat
    const companyList = Object.keys(traderCount).filter(company => traderCount[company] >= threshold);

    return {
        total_data: companyList.length,
        company_list: companyList.sort()
    };
};
